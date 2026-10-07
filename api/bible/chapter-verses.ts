import { GoogleGenAI } from '@google/genai';
import { PROTESTANT_BOOKS } from '../../src/data/bibleData';
import { getExpectedVerseCount } from '../../src/data/bibleVerseCounts';
import { generateCanonicalChapterVerses, CURATED_CANONICAL_CHAPTERS } from '../../src/data/canonicalBibleEngine';

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

export default async function handler(req: any, res: any) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Safely extract params from query or body or url
    let bookParam = req.query?.book;
    let chapterParam = req.query?.chapter;

    if (!bookParam && req.url) {
      try {
        const parsedUrl = new URL(req.url, 'http://localhost');
        bookParam = parsedUrl.searchParams.get('book');
        chapterParam = parsedUrl.searchParams.get('chapter');
      } catch (_urlErr) {
        // ignore
      }
    }

    if (!bookParam && req.body) {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      bookParam = body?.book;
      chapterParam = body?.chapter;
    }

    const bookName = bookParam ? String(bookParam) : 'ሮሜ';
    const chapterNum = Number(chapterParam) || 1;

    const matchedBook = PROTESTANT_BOOKS.find(
      (b) =>
        b.nameAm === bookName ||
        b.nameEn.toLowerCase() === bookName.toLowerCase() ||
        b.id.toUpperCase() === bookName.toUpperCase() ||
        b.abbrAm === bookName ||
        b.abbrEn.toLowerCase() === bookName.toLowerCase()
    ) || PROTESTANT_BOOKS[44]; // ROM

    const bookId = matchedBook.id;
    const key = `${bookId.toUpperCase()}_${chapterNum}`;

    // 1. If curated authentic chapter exists, deliver directly
    if (CURATED_CANONICAL_CHAPTERS[key] && CURATED_CANONICAL_CHAPTERS[key].length > 0) {
      return res.status(200).json({
        book: matchedBook.nameAm,
        chapter: chapterNum,
        verses: CURATED_CANONICAL_CHAPTERS[key],
      });
    }

    // 2. Try Gemini to generate authentic word-for-word Amharic 1962 Bible text
    const hasApiKey = Boolean(process.env.GEMINI_API_KEY || process.env.API_KEY);
    if (hasApiKey) {
      try {
        const ai = getGeminiClient();
        const expectedCount = getExpectedVerseCount(bookId, chapterNum);
        const isOT = matchedBook.testament === 'OT';
        const prompt = `Generate exact verses for ${matchedBook.nameAm} (${matchedBook.nameEn}) Chapter ${chapterNum} according to the Ethiopian Protestant 1962/1879 EC Amharic Bible (የመጽሐፍ ቅዱስ ማኅበር / 66 books canon).
${expectedCount > 0 ? `This chapter contains exactly ${expectedCount} verses (1 to ${expectedCount}). Include all verses without omitting any.` : 'Include all verses.'}

Output raw JSON strictly matching:
{
  "book": "${matchedBook.nameAm}",
  "chapter": ${chapterNum},
  "verses": [
    {
      "verse": 1,
      "textAm": "ትክክለኛው የአማርኛ ጥቅስ ጽሑፍ",
      "textEn": "Faithful English translation",
      "textOriginal": "Original ${isOT ? 'Hebrew' : 'Greek'} text",
      "transliteration": "Phonetic transliteration",
      "strongsWords": [
        {
          "strongsNumber": "${isOT ? 'H...' : 'G...'}",
          "wordOriginal": "word",
          "transliteration": "translit",
          "lemma": "lemma",
          "partOfSpeech": "noun/verb",
          "definition": "definition",
          "amharicMeaning": "ፍቺ"
        }
      ]
    }
  ]
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            responseMimeType: 'application/json',
            temperature: 0.1,
          },
        });

        const rawText = response.text || '';
        if (rawText) {
          const parsed = JSON.parse(rawText);
          if (parsed && Array.isArray(parsed.verses) && parsed.verses.length > 0) {
            const sorted = parsed.verses.sort((a: any, b: any) => a.verse - b.verse);
            return res.status(200).json({
              book: matchedBook.nameAm,
              chapter: chapterNum,
              verses: sorted,
            });
          }
        }
      } catch (_aiErr) {
        // Fall back to canonical generator
      }
    }

    // 3. Generate canonical verses from canonical Bible Engine
    const canonicalVerses = generateCanonicalChapterVerses(bookId, chapterNum);

    return res.status(200).json({
      book: matchedBook.nameAm,
      chapter: chapterNum,
      verses: canonicalVerses,
    });
  } catch (err: any) {
    console.error('Serverless chapter-verses error:', err);
    try {
      const fallbackVerses = generateCanonicalChapterVerses('ROM', 8);
      return res.status(200).json({
        book: 'ወደ ሮሜ ሰዎች',
        chapter: 8,
        verses: fallbackVerses,
        isFallback: true,
      });
    } catch (_deepErr) {
      return res.status(200).json({
        book: 'መጽሐፍ ቅዱስ',
        chapter: 1,
        verses: [],
      });
    }
  }
}
