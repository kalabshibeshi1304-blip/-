import { GoogleGenAI } from '@google/genai';
import { PROTESTANT_BOOKS } from '../../src/data/bibleData';
import { getExpectedVerseCount } from '../../src/data/bibleVerseCounts';
import { SEED_CHAPTERS } from '../../src/data/seedChapters/index';

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (apiKey) {
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return new GoogleGenAI({
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function safeExtractJSON<T = any>(rawText: string | undefined | null): T {
  if (!rawText) {
    throw new Error('Empty response from AI model');
  }

  let text = rawText.trim();
  if (text.startsWith('```')) {
    text = text.replace(/^```(?:json)?\s*/i, '');
    const closingFenceIndex = text.lastIndexOf('```');
    if (closingFenceIndex !== -1) {
      text = text.substring(0, closingFenceIndex).trim();
    }
  }

  try {
    return JSON.parse(text);
  } catch (_e1) {
    const firstBrace = text.indexOf('{');
    const firstBracket = text.indexOf('[');
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
      const lastCharIdx = isObject ? text.lastIndexOf('}') : text.lastIndexOf(']');
      if (lastCharIdx > startIdx) {
        try {
          return JSON.parse(text.substring(startIdx, lastCharIdx + 1));
        } catch (_e2) {
          // Fallback
        }
      }
    }
    throw new Error(`Failed to parse JSON: ${text.slice(0, 100)}`);
  }
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const bookParam = req.query.book || req.body?.book;
  const chapterParam = req.query.chapter || req.body?.chapter;

  if (!bookParam || !chapterParam) {
    return res.status(400).json({ error: 'Book and chapter are required' });
  }

  const chapterNum = Number(chapterParam);
  const matchedBook = PROTESTANT_BOOKS.find(
    (b) =>
      b.nameAm === bookParam ||
      b.nameEn.toLowerCase() === String(bookParam).toLowerCase() ||
      b.id.toUpperCase() === String(bookParam).toUpperCase()
  );

  const bookId = matchedBook ? matchedBook.id : String(bookParam);
  const key = `${bookId.toUpperCase()}_${chapterNum}`;

  // 1. Check static seed chapters first
  if (SEED_CHAPTERS[key] && SEED_CHAPTERS[key].length > 0) {
    return res.status(200).json({
      book: matchedBook?.nameAm || bookParam,
      chapter: chapterNum,
      verses: SEED_CHAPTERS[key],
    });
  }

  const isOT = matchedBook?.testament === 'OT';
  const expectedCount = matchedBook ? getExpectedVerseCount(matchedBook.id, chapterNum) : 0;
  const originalLangName = isOT
    ? 'Biblical Hebrew (Biblia Hebraica Stuttgartensia / BHS with vowels)'
    : 'Biblical Koine Greek (Novum Testamentum Graece / NA28 with accents)';

  try {
    const ai = getGeminiClient();
    const systemInstruction =
      'You are a high-precision Ethiopian Protestant Bible database API. Output strictly raw valid JSON without markdown formatting or code blocks.';

    const prompt = `Generate the full verses of ${matchedBook?.nameAm || bookParam} (${matchedBook?.nameEn || bookParam}) Chapter ${chapterNum} according to the Ethiopian Bible Society 1962 EC Amharic Bible and ESV English with ${originalLangName}.
${expectedCount > 0 ? `Must contain exactly ${expectedCount} verses (1 to ${expectedCount}).` : ''}

JSON Schema:
{
  "book": "${matchedBook?.nameAm || bookParam}",
  "chapter": ${chapterNum},
  "verses": [
    {
      "verse": 1,
      "textAm": "የተሟላ ትክክለኛ የአማርኛ ጥቅስ ጽሑፍ",
      "textEn": "Faithful English ESV translation",
      "textOriginal": "Original Hebrew/Greek text",
      "transliteration": "Phonetic transliteration",
      "strongsWords": [
        {
          "strongsNumber": "${isOT ? 'H...' : 'G...'}",
          "wordOriginal": "word",
          "transliteration": "transliteration",
          "lemma": "root lemma",
          "partOfSpeech": "noun/verb",
          "definition": "lexical definition",
          "amharicMeaning": "የቃሉ ቀጥተኛ ፍቺ"
        }
      ]
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    });

    const parsed = safeExtractJSON(response.text);
    const versesList = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed?.verses)
      ? parsed.verses
      : [];

    if (versesList.length > 0) {
      return res.status(200).json({
        book: matchedBook?.nameAm || bookParam,
        chapter: chapterNum,
        verses: versesList,
      });
    }
  } catch (err: any) {
    console.warn('Vercel serverless chapter-verses fallback:', err?.message || err);
  }

  // Fallback if AI call fails
  const total = expectedCount > 0 ? expectedCount : 15;
  const fallbackVerses = Array.from({ length: total }, (_, i) => ({
    verse: i + 1,
    textAm: `${matchedBook?.nameAm || bookParam} ${chapterNum}:${i + 1} — «የእግዚአብሔር ቃል ለእግሬ መብራት፥ ለመንገዴም ብርሃን ነው።» (መዝሙር 119:105)`,
    textEn: `${matchedBook?.nameEn || bookParam} ${chapterNum}:${i + 1} — "Your word is a lamp to my feet and a light to my path." (Psalm 119:105)`,
    textOriginal: isOT ? 'נֵר־לְרַגְלִי דְבָרֶךָ וְאוֹר לִנְתִיבָתִי׃' : 'Λύχνος τοῖς ποσίν μου ὁ λόγος σου καὶ φῶς ταῖς τρίβοις μου.',
    transliteration: isOT ? "Ner-l'ragli d'varekha v'or lintivati." : "Lychnos tois posin mou ho logos sou kai phos tais tribois mou.",
    strongsWords: [
      {
        strongsNumber: isOT ? 'H1697' : 'G3056',
        wordOriginal: isOT ? 'דָּבָר' : 'λόγος',
        transliteration: isOT ? 'dabar' : 'logos',
        lemma: isOT ? 'דָּבָר' : 'λόγος',
        partOfSpeech: 'noun',
        definition: 'word, divine utterance',
        amharicMeaning: 'ቃል / የእግዚአብሔር ቃል'
      }
    ]
  }));

  return res.status(200).json({
    book: matchedBook?.nameAm || bookParam,
    chapter: chapterNum,
    verses: fallbackVerses,
  });
}
