import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { PROTESTANT_BOOKS, getCachedVerses } from "./src/data/bibleData";
import { getExpectedVerseCount } from "./src/data/bibleVerseCounts";
import { getPresetExegesis } from "./src/data/theologyData";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily/safely
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing");
    }
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

/**
 * Executes a Gemini request with:
 * 1. Automatic retries on transient errors (503 UNAVAILABLE, high demand spikes, 429)
 * 2. Cascades from fastest/most available model: "gemini-3.1-flash-lite" -> "gemini-3.8-flash" -> "gemini-flash-latest"
 */
async function generateWithFallback(
  ai: GoogleGenAI,
  params: {
    contents: any;
    config?: any;
    preferredModel?: string;
  }
) {
  // Use gemini-3.1-flash-lite as primary high-speed & stable model, falling back to gemini-3.8-flash and gemini-flash-latest
  const models = [
    params.preferredModel || "gemini-3.1-flash-lite",
    "gemini-flash-latest",
    "gemini-3.8-flash",
  ];
  const uniqueModels = Array.from(new Set(models));

  let lastError: any = null;

  for (const model of uniqueModels) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: params.contents,
          config: params.config,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const msg = err?.message || String(err);
        const isTransient =
          msg.includes("503") ||
          msg.includes("UNAVAILABLE") ||
          msg.includes("high demand") ||
          msg.includes("429") ||
          msg.includes("RESOURCE_EXHAUSTED");

        console.warn(
          `[Gemini Attempt] Model '${model}' attempt ${attempt + 1} failed: ${msg.slice(0, 160)}`
        );

        if (isTransient && attempt === 0) {
          // Wait 600ms before retrying same model
          await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 300));
          continue;
        }
        // Break out to try the next fallback model immediately
        break;
      }
    }
  }

  throw lastError;
}

/**
 * Safely extracts and parses JSON from AI responses even if wrapped in markdown or followed by extra characters.
 */
function safeExtractJSON<T = any>(rawText: string | undefined | null): T {
  if (!rawText) {
    throw new Error("Empty response from AI model");
  }

  let text = rawText.trim();

  // Strip markdown code fences if wrapped in ```json ... ``` or ``` ... ```
  if (text.startsWith("```")) {
    text = text.replace(/^```(?:json)?\s*/i, "");
    const closingFenceIndex = text.lastIndexOf("```");
    if (closingFenceIndex !== -1) {
      text = text.substring(0, closingFenceIndex).trim();
    }
  }

  // 1. Direct JSON parse
  try {
    return JSON.parse(text);
  } catch (_e1) {
    // 2. Extract outermost balanced JSON object { ... } or array [ ... ]
    const firstBrace = text.indexOf("{");
    const firstBracket = text.indexOf("[");

    let isObject = false;
    let startIdx = -1;
    if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
      isObject = true;
      startIdx = firstBrace;
    } else if (firstBracket !== -1) {
      isObject = false;
      startIdx = firstBracket;
    }

    if (startIdx !== -1) {
      let depth = 0;
      let inString = false;
      let escape = false;
      let endIdx = -1;
      const openChar = isObject ? "{" : "[";
      const closeChar = isObject ? "}" : "]";

      for (let i = startIdx; i < text.length; i++) {
        const char = text[i];
        if (escape) {
          escape = false;
          continue;
        }
        if (char === "\\") {
          escape = true;
          continue;
        }
        if (char === '"') {
          inString = !inString;
          continue;
        }
        if (!inString) {
          if (char === openChar) {
            depth++;
          } else if (char === closeChar) {
            depth--;
            if (depth === 0) {
              endIdx = i;
              break;
            }
          }
        }
      }

      if (endIdx !== -1) {
        const extracted = text.substring(startIdx, endIdx + 1);
        try {
          return JSON.parse(extracted);
        } catch (_e2) {
          try {
            const sanitized = extracted
              .replace(/,\s*([\]}])/g, "$1") // Remove trailing commas
              .replace(/[\u0000-\u001F\u007F-\u009F]/g, (c) =>
                c === "\n" || c === "\r" || c === "\t" ? c : ""
              );
            return JSON.parse(sanitized);
          } catch (_e3) {
            // Fall through
          }
        }
      }

      // Fallback: take from startIdx to last matching closing brace
      const lastCharIdx = isObject ? text.lastIndexOf("}") : text.lastIndexOf("]");
      if (lastCharIdx > startIdx) {
        try {
          return JSON.parse(text.substring(startIdx, lastCharIdx + 1));
        } catch (_e4) {
          // Fall through
        }
      }
    }

    throw new Error(`Failed to parse valid JSON from AI response: ${text.slice(0, 150)}`);
  }
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Theological Analysis Endpoint
// Provides sound, evangelical Protestant exegesis, Christocentric focus, Five Solas alignment, original language insight, and application
app.post("/api/theology/analyze", async (req, res) => {
  try {
    const {
      book,
      chapter,
      verseStart,
      verseEnd,
      passageText,
      analysisType = "depth", // "depth" | "overview" | "sermon" | "words"
    } = req.body;

    if (!book || !chapter) {
      res.status(400).json({ error: "Book and chapter are required" });
      return;
    }

    const ai = getGeminiClient();
    const verseRange = verseStart ? (verseEnd && verseEnd !== verseStart ? `ቁጥር ${verseStart}-${verseEnd}` : `ቁጥር ${verseStart}`) : "ምዕራፉ በሙሉ";
    const passageReference = `${book} ምዕራፍ ${chapter}${verseStart ? `:${verseRange}` : ""}`;

    // Find book ID for preset lookup
    const matchingBook = PROTESTANT_BOOKS.find(
      (b) => b.nameAm === book || b.nameEn.toLowerCase() === String(book).toLowerCase() || b.id === book
    );
    const bookId = matchingBook ? matchingBook.id : book;

    const systemInstruction = `You are an expert Evangelical Protestant Biblical Theologian, Professor of Exegesis, and Pastoral Teacher fluent in Amharic, English, Biblical Greek, and Biblical Hebrew.
Your theological framework is strictly Evangelical Protestant rooted in the historic Reformation:
1. Sola Scriptura (መጽሐፍ ቅዱስ ብቻ - Scripture is the supreme and final authority)
2. Sola Fide (በእምነት ብቻ - Justification through faith alone)
3. Sola Gratia (በጸጋ ብቻ - Salvation by sovereign unmerited grace alone)
4. Solus Christus (በክርስቶስ ብቻ - Christ is the only mediator, savior, and Lord)
5. Soli Deo Gloria (ለእግዚአብሔር ክብር ብቻ - To God alone be the glory)

Your goal is to provide deep, accurate, biblically sound theological commentary (ቲኦሎጂካል ትንታኔ) for Ethiopian Protestant believers in clear, reverent Amharic (accompanied by key English/Greek/Hebrew terminology where beneficial). Avoid sectarian bitterness; center everything on Jesus Christ and the Gospel of Grace.

Formatting requirement:
Use clean Markdown with appropriate headers (###), bold terms, and bullet points.
The response should contain these structured sections:
1. ### 📖 የክፍሉ የታሪክና ሥነ-ጽሑፋዊ አውድ (Historical & Literary Context)
   - ማን ጻፈው? ለማን ተጻፈ? በምን ዓይነት ታሪካዊና ባህላዊ ዳራ ውስጥ?
2. ### ✝️ ክርስቶስ-ተኮር ትንታኔ (Christocentric & Redemptive-Historical Theme)
   - ይህ ክፍል ወደ ኢየሱስ ክርስቶስ፣ ወደ ወንጌል፣ እና ወደ እግዚአብሔር የማዳን ዕቅድ እንዴት ያመለክታል?
3. ### 🏛️ የወንጌላውያን አስተምህሮ እና አምስቱ ሶላዎች (Key Protestant Doctrines & The 5 Solas)
   - በክፍሉ ውስጥ የሚንፀባረቁ መሠረተ-እምነቶች (ጸጋ፣ እምነት፣ ጽድቅ፣ ቅድስና፣ ወዘተ)
4. ### 🔍 የቃላት ጥናትና አገናዛቢ ጥቅሶች (Original Language Insights & Cross-References)
   - ዋና ዋና የዕብራይስጥ ወይም የግሪክ ቃላት (ለምሳሌ፡ ጸጋ/Charis, ፍቅር/Agape, እምነት/Pistis, ጽድቅ/Dikaiosyne, ኪዳን/Berit)
   - ክፍሉን የሚያብራሩ ተዛማጅ የመጽሐፍ ቅዱስ ጥቅሶች (Cross-References)
5. ### 🕊️ ለግል ሕይወትና ለመንፈሳዊ ጉዞ ተግባራዊ አተገባበር (Practical Spiritual Application)
   - አማኙ በዕለት ተዕለት ኑሮው፣ በጸሎትና በታማኝነት እንዴት ይተገብረዋል?`;

    let specificPrompt = `እባክህ ለሚከተለው የመጽሐፍ ቅዱስ ክፍል የወንጌላዊ ፕሮቴስታንት ሥነ-መለኮት (Evangelical Protestant Theological Exegesis) ትንታኔ በዝርዝር አዘጋጅልኝ:
የክፍሉ መጠሪያ: ${passageReference}
${passageText ? `የተመረጠው የክፍሉ ጽሑፍ:\n"${passageText}"` : ""}
የትንታኔው ዓይነት: ${
      analysisType === "sermon"
        ? "የስብከት እና የማስተማሪያ ረቂቅ (Sermon & Homiletical Outline with key preaching points and illustrations)"
        : analysisType === "words"
        ? "ጥልቅ የቃላት ጥናት (In-depth Greek/Hebrew original word root analysis and grammatical exegesis)"
        : analysisType === "overview"
        ? "ፈጣንና አጠር ያለ ማብራሪያ (Concise theological overview and key takeaway)"
        : "ጥልቅ ቲኦሎጂካል ትንታኔ (Comprehensive theological exegesis)"
    }`;

    try {
      const response = await generateWithFallback(ai, {
        preferredModel: "gemini-3.1-flash-lite",
        contents: specificPrompt,
        config: {
          systemInstruction,
          temperature: 0.4,
        },
      });

      res.json({
        passage: passageReference,
        analysis: response.text || "ትንታኔውን ማመንጨት አልተቻለም። እባክዎ እንደገና ይሞክሩ።",
        analysisType,
      });
      return;
    } catch (genError: any) {
      console.warn("Gemini generation failed, checking preset fallback...", genError?.message);
      const preset = getPresetExegesis(bookId, Number(chapter));
      if (preset) {
        res.json({
          passage: passageReference,
          analysis: preset,
          analysisType,
          isPreset: true,
        });
        return;
      }
      throw genError;
    }
  } catch (error: any) {
    console.error("Error generating theological analysis:", error);
    const msg = error?.message || "Internal server error";
    const isOverloaded = msg.includes("503") || msg.includes("UNAVAILABLE") || msg.includes("high demand");

    res.status(isOverloaded ? 503 : 500).json({
      error: isOverloaded
        ? "ሞዴሉ በአሁኑ ሰዓት በከፍተኛ የተጠቃሚዎች ጥያቄ ምክንያት ተጨናንቋል።"
        : "Theological analysis generation failed",
      message: isOverloaded
        ? "የቲኦሎጂ ትንታኔ ሞዴሉ በአሁኑ ሰዓት በከፍተኛ የተጠቃሚዎች ጥያቄ ምክንያት ተጨናንቋል። እባክዎ ጥቂት ሰከንዶች ቆይተው እንደገና ይሞክሩ።"
        : msg,
      isTransient: isOverloaded,
    });
  }
});

// Theological Q&A Assistant Endpoint
// Answers theological and doctrinal questions from an Evangelical Protestant perspective
app.post("/api/theology/ask", async (req, res) => {
  try {
    const { question, currentContext } = req.body;

    if (!question) {
      res.status(400).json({ error: "Question is required" });
      return;
    }

    const ai = getGeminiClient();

    const systemInstruction = `You are a trusted Protestant Bible Study & Theology Mentor (የመጽሐፍ ቅዱስና የወንጌላዊ ሥነ-መለኮት አማካሪ).
You guide Ethiopian Protestant believers in understanding Scripture, Christian doctrine, theological dilemmas, and spiritual life based on God's Word (Sola Scriptura).
Always cite relevant Bible verses.
Speak with grace, biblical depth, pastoral wisdom, and clarity in Amharic (with English terms in parentheses when helpful).
Respect the 66-book canon of the Protestant Bible.`;

    const prompt = `ጥያቄ: "${question}"
${currentContext ? `የአሁኑ መጽሐፍ ቅዱሳዊ አውድ: ${currentContext}` : ""}

እባክዎ እንደ ወንጌላዊ ፕሮቴስታንት አስተምህሮ መጽሐፍ ቅዱስን መሠረት በማድረግ ግልጽ፣ ጥልቅና አጽናኝ መልስ በመጽሐፍ ቅዱስ ጥቅሶች አስደግፈው በMarkdown ያብራሩ።`;

    const response = await generateWithFallback(ai, {
      preferredModel: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.4,
      },
    });

    res.json({
      answer: response.text || "መልስ ማመንጨት አልተቻለም።",
    });
  } catch (error: any) {
    console.error("Error in theology Q&A:", error);
    const msg = error?.message || "Internal server error";
    const isOverloaded = msg.includes("503") || msg.includes("UNAVAILABLE") || msg.includes("high demand");

    res.status(isOverloaded ? 503 : 500).json({
      error: "Failed to answer theological question",
      message: isOverloaded
        ? "የቲኦሎጂ ረዳት ሞዴሉ በአሁኑ ሰዓት በከፍተኛ የተጠቃሚዎች ቁጥር ምክንያት ተጨናንቋል። እባክዎ ጥቂት ቆይተው እንደገና ይሞክሩ።"
        : msg,
      isTransient: isOverloaded,
    });
  }
});

// Dynamic Chapter Verse Fetcher Endpoint (Supports both GET & POST for Service Worker caching)
async function handleChapterVersesRequest(req: express.Request, res: express.Response) {
  try {
    const book = req.query.book || req.body?.book;
    const chapter = req.query.chapter || req.body?.chapter;
    if (!book || !chapter) {
      res.status(400).json({ error: "Book and chapter are required" });
      return;
    }

    const chapterNum = Number(chapter);

    // 1. First check if we have this chapter pre-cached in our static canonical dataset
    const matchedBook = PROTESTANT_BOOKS.find(
      (b) =>
        b.nameAm === book ||
        b.nameEn.toLowerCase() === String(book).toLowerCase() ||
        b.id.toUpperCase() === String(book).toUpperCase()
    );

    if (matchedBook) {
      const cached = getCachedVerses(matchedBook.id, chapterNum);
      if (cached && cached.length > 0) {
        res.json({
          book: matchedBook.nameAm,
          chapter: chapterNum,
          verses: cached,
        });
        return;
      }
    }

    const ai = getGeminiClient();
    const isOT = matchedBook?.testament === 'OT' || ['GEN','EXO','LEV','NUM','DEU','JOS','JDG','RUT','1SA','2SA','1KI','2KI','1CH','2CH','EZR','NEH','EST','JOB','PSA','PRO','ECC','SNG','ISA','JER','LAM','EZK','DAN','HOS','JOL','AMO','OBA','JON','MIC','NAH','HAB','ZEP','HAG','ZEC','MAL'].includes(matchedBook?.id || '');
    const originalLangName = isOT ? 'Biblical Hebrew (Biblia Hebraica Stuttgartensia / BHS with niqqud/vowels)' : 'Biblical Koine Greek (Novum Testamentum Graece / NA28 with accents)';

    const expectedCount = matchedBook ? getExpectedVerseCount(matchedBook.id, chapterNum) : 0;
    const systemInstruction = "You are a precise biblical scholar API that outputs strictly raw valid JSON. Do not prepend or append markdown code blocks, backticks, or any commentary text outside the JSON structure.";

    const prompt = `Generate the exact verses for ${book} Chapter ${chapterNum} according to the Ethiopian Protestant 1962/1879 EC Amharic Bible (የመጽሐፍ ቅዱስ ማኅበር / Ethiopian Bible Society 66 books edition), English (ESV/NIV), and original biblical language (${originalLangName}).
${expectedCount > 0 ? `This chapter contains exactly ${expectedCount} verses (from verse 1 to verse ${expectedCount}). You MUST include all ${expectedCount} verses completely without omitting any verse.` : 'Include all verses of this chapter faithfully and in order.'}

Output raw JSON strictly matching this schema:
{
  "book": "${book}",
  "chapter": ${chapterNum},
  "originalLang": "${isOT ? 'hebrew' : 'greek'}",
  "originalLanguageName": "${isOT ? 'ዕብራይስጥ (Biblical Hebrew / עבריት)' : 'ግሪክኛ (Biblical Greek / Ἑλληνική)'}",
  "verses": [
    {
      "verse": 1,
      "textAm": "የአማርኛ የመጽሐፍ ቅዱስ ጥቅስ ቃል በቃል እውነተኛ ጽሑፍ",
      "textEn": "Faithful English translation (ESV/NIV)",
      "textOriginal": "The authentic original ${isOT ? 'Hebrew with vowels' : 'Greek with accents'} text for this verse",
      "transliteration": "Phonetic romanized transliteration of the original verse",
      "strongsWords": [
        {
          "strongsNumber": "${isOT ? 'H...' : 'G...'}",
          "wordOriginal": "original word",
          "transliteration": "phonetic transliteration",
          "lemma": "dictionary root lemma",
          "partOfSpeech": "noun/verb/etc",
          "definition": "concise English lexical definition",
          "amharicMeaning": "የቃሉ ቀጥተኛና ቲኦሎጂካል የአማርኛ ፍቺ"
        }
      ]
    }
  ]
}
For strongsWords, include 1 to 2 key theological words per verse to maintain concise, high-speed execution.`;

    const response = await generateWithFallback(ai, {
      preferredModel: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    const parsed = safeExtractJSON(response.text);
    const versesList = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed?.verses)
      ? parsed.verses
      : [];

    res.json({
      book: parsed?.book || matchedBook?.nameAm || book,
      chapter: parsed?.chapter || chapterNum,
      originalLang: parsed?.originalLang || (isOT ? "hebrew" : "greek"),
      originalLanguageName: parsed?.originalLanguageName || (isOT ? "ዕብራይስጥ (Biblical Hebrew / עברית)" : "ግሪክኛ (Biblical Greek / Ἑλληνική)"),
      verses: versesList,
    });
  } catch (error: any) {
    console.error("Error fetching chapter verses:", error);
    const msg = error?.message || "Failed to fetch chapter verses";
    const isOverloaded = msg.includes("503") || msg.includes("UNAVAILABLE") || msg.includes("high demand");

    res.status(isOverloaded ? 503 : 500).json({
      error: "Failed to fetch chapter verses",
      message: isOverloaded
        ? "የመጽሐፍ ቅዱስ ጽሑፉን በማዘጋጀት ላይ ሳለ ሞዴሉ በከፍተኛ ጥያቄ ምክንያት ተጨናንቋል። እባክዎ እንደገና ይሞክሩ።"
        : msg,
      isTransient: isOverloaded,
    });
  }
}

app.get("/api/bible/chapter-verses", handleChapterVersesRequest);
app.post("/api/bible/chapter-verses", handleChapterVersesRequest);

// Start Server with Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Berean Protestant Study Bible Server running on port ${PORT}`);
  });
}

startServer();
