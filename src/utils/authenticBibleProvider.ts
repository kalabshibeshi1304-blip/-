import { BibleVerse, BibleBook } from '../types';
import { getExpectedVerseCount } from '../data/bibleVerseCounts';
import { CURATED_CANONICAL_CHAPTERS } from '../data/canonicalBibleEngine';
import { getLocalChapterVerses } from '../data/localBibleDatabase';
import { saveOfflineChapter, getOfflineChapter, isAuthenticChapter } from './offlineBibleStorage';

// In-memory cache for full downloaded books
const bookCache: Map<number, any> = new Map();

/**
 * Universal extractor for various Bible JSON schemas
 */
function extractVersesFromBookData(bookData: any, chapterNum: number, book: BibleBook): BibleVerse[] {
  if (!bookData) return [];

  const isOT = book.testament === 'OT';
  const verses: BibleVerse[] = [];

  // Schema 1: { "chapters": [ { "chapter": 1, "verses": [ { "verse": 1, "text": "..." } ] } ] }
  if (Array.isArray(bookData.chapters)) {
    const chapterObj = bookData.chapters.find(
      (c: any) =>
        Number(c.chapter) === chapterNum ||
        Number(c.chapter_number) === chapterNum ||
        Number(c.id) === chapterNum
    );
    if (chapterObj && Array.isArray(chapterObj.verses)) {
      chapterObj.verses.forEach((v: any, idx: number) => {
        const vNum = Number(v.verse || v.verse_number) || idx + 1;
        const text = v.text || v.textAm || v.content || '';
        if (text && text.trim()) {
          verses.push({
            verse: vNum,
            textAm: text.trim(),
            textEn: `${book.nameEn} ${chapterNum}:${vNum}`,
            textOriginal: isOT ? `(ዕብራይስጥ ${book.nameEn} ${chapterNum}:${vNum})` : `(ግሪክኛ ${book.nameEn} ${chapterNum}:${vNum})`,
          });
        }
      });
      if (verses.length > 0) return verses;
    }

    // Schema 1b: chapters is an array of arrays of strings/objects
    if (bookData.chapters[chapterNum - 1]) {
      const chItem = bookData.chapters[chapterNum - 1];
      if (Array.isArray(chItem)) {
        chItem.forEach((vItem: any, idx: number) => {
          const vNum = typeof vItem === 'object' ? (Number(vItem.verse) || idx + 1) : idx + 1;
          const text = typeof vItem === 'object' ? (vItem.text || '') : String(vItem);
          if (text && text.trim()) {
            verses.push({
              verse: vNum,
              textAm: text.trim(),
              textEn: `${book.nameEn} ${chapterNum}:${vNum}`,
            });
          }
        });
        if (verses.length > 0) return verses;
      }
    }
  }

  // Schema 2: Keyed by chapter number: { "1": { "1": "text", "2": "text" } } or { "1": [ "text1", "text2" ] }
  const chKey = String(chapterNum);
  const chData = bookData[chKey] || bookData[chapterNum] || (bookData.chapters && bookData.chapters[chKey]);
  if (chData) {
    if (Array.isArray(chData)) {
      chData.forEach((item: any, idx: number) => {
        const vNum = typeof item === 'object' ? (Number(item.verse) || idx + 1) : idx + 1;
        const text = typeof item === 'object' ? (item.text || '') : String(item);
        if (text && text.trim()) {
          verses.push({
            verse: vNum,
            textAm: text.trim(),
            textEn: `${book.nameEn} ${chapterNum}:${vNum}`,
          });
        }
      });
      if (verses.length > 0) return verses;
    } else if (typeof chData === 'object') {
      Object.entries(chData).forEach(([vNumStr, vText]) => {
        const vNum = parseInt(vNumStr, 10) || 1;
        const text = typeof vText === 'object' ? (vText as any).text : String(vText);
        if (text && text.trim()) {
          verses.push({
            verse: vNum,
            textAm: text.trim(),
            textEn: `${book.nameEn} ${chapterNum}:${vNum}`,
          });
        }
      });
      if (verses.length > 0) return verses;
    }
  }

  // Schema 3: Direct flat array of verses: [ { "chapter": 1, "verse": 1, "text": "..." } ]
  if (Array.isArray(bookData)) {
    const chVerses = bookData.filter((item: any) => Number(item.chapter) === chapterNum);
    chVerses.forEach((item: any, idx: number) => {
      const vNum = Number(item.verse) || idx + 1;
      const text = item.text || item.textAm || '';
      if (text && text.trim()) {
        verses.push({
          verse: vNum,
          textAm: text.trim(),
          textEn: `${book.nameEn} ${chapterNum}:${vNum}`,
        });
      }
    });
    if (verses.length > 0) return verses;
  }

  return verses;
}

/**
 * Fetches authentic Amharic chapter verses with multi-CDN fallbacks and offline persistence
 */
export async function fetchAuthenticChapter(book: BibleBook, chapterNum: number): Promise<BibleVerse[] | null> {
  const key = `${book.id.toUpperCase()}_${chapterNum}`;

  // 1. Direct Local Embedded JSON Database (0ms Instant & 100% Reliable)
  const localVerses = getLocalChapterVerses(book.id, chapterNum);
  if (localVerses && localVerses.length > 0 && isAuthenticChapter(localVerses)) {
    saveOfflineChapter(book.id, chapterNum, book.nameAm, book.nameEn, localVerses);
    return localVerses;
  }

  // 2. Check curated high-fidelity local dataset
  if (CURATED_CANONICAL_CHAPTERS[key] && CURATED_CANONICAL_CHAPTERS[key].length > 0) {
    const expected = getExpectedVerseCount(book.id, chapterNum);
    if (CURATED_CANONICAL_CHAPTERS[key].length >= expected && isAuthenticChapter(CURATED_CANONICAL_CHAPTERS[key])) {
      return CURATED_CANONICAL_CHAPTERS[key];
    }
  }

  // 3. Check local offline storage
  const cached = getOfflineChapter(book.id, chapterNum, false);
  if (cached && cached.length > 0 && isAuthenticChapter(cached)) {
    const expected = getExpectedVerseCount(book.id, chapterNum);
    if (cached.length >= expected) {
      return cached;
    }
  }

  // 4. Check memory cache for whole book
  if (bookCache.has(book.order)) {
    const bookData = bookCache.get(book.order);
    const verses = extractVersesFromBookData(bookData, chapterNum, book);
    if (verses && verses.length > 0 && isAuthenticChapter(verses)) {
      saveOfflineChapter(book.id, chapterNum, book.nameAm, book.nameEn, verses);
      return verses;
    }
  }

  // 5. Fetch from API or reliable CDN endpoints
  const bookOrder = book.order; // 1..66
  const endpoints = [
    `/api/bible/chapter-verses?book=${encodeURIComponent(book.id)}&chapter=${chapterNum}`,
    `https://cdn.jsdelivr.net/gh/magna25/amharic-bible-json@master/books/${bookOrder}.json`,
    `https://raw.githubusercontent.com/magna25/amharic-bible-json/master/books/${bookOrder}.json`,
    `https://cdn.jsdelivr.net/gh/magna25/amharic-bible-json@main/books/${bookOrder}.json`,
  ];

  for (const url of endpoints) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          // If from API endpoint
          if (data.verses && Array.isArray(data.verses) && data.verses.length > 0) {
            const sorted = [...data.verses].sort((a, b) => a.verse - b.verse);
            if (isAuthenticChapter(sorted)) {
              saveOfflineChapter(book.id, chapterNum, book.nameAm, book.nameEn, sorted);
              return sorted;
            }
          }

          // If full book JSON
          bookCache.set(book.order, data);
          const verses = extractVersesFromBookData(data, chapterNum, book);
          if (verses && verses.length > 0 && isAuthenticChapter(verses)) {
            const sorted = [...verses].sort((a, b) => a.verse - b.verse);
            saveOfflineChapter(book.id, chapterNum, book.nameAm, book.nameEn, sorted);
            return sorted;
          }
        }
      }
    } catch (_err) {
      // Try next endpoint
    }
  }

  // 6. Return whatever authentic verses exist locally
  return getOfflineChapter(book.id, chapterNum, false);
}
