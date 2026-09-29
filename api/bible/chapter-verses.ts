import { PROTESTANT_BOOKS, getBookById } from '../../src/data/bibleData';
import { getExpectedVerseCount } from '../../src/data/bibleVerseCounts';
import { generateCanonicalChapterVerses, CURATED_CANONICAL_CHAPTERS } from '../../src/data/canonicalBibleEngine';

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

    // Default to Romans 8 if nothing specified
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

    // 2. Generate canonical verses from canonical Bible Engine
    const canonicalVerses = generateCanonicalChapterVerses(bookId, chapterNum);

    return res.status(200).json({
      book: matchedBook.nameAm,
      chapter: chapterNum,
      verses: canonicalVerses,
    });
  } catch (err: any) {
    console.error('Serverless chapter-verses error:', err);
    // Even in case of unexpected error, return fallback canonical verses with 200 OK
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
