import { BibleVerse } from '../types';
import { SEED_CHAPTERS, getBookById } from '../data/bibleData';

const OFFLINE_CHAPTERS_KEY = 'kal_offline_chapters_v1';
const OFFLINE_STATS_KEY = 'kal_offline_stats_v1';

export interface StoredChapterData {
  bookId: string;
  bookNameAm: string;
  bookNameEn: string;
  chapter: number;
  verses: BibleVerse[];
  cachedAt: number;
}

export interface OfflineCacheStats {
  totalChaptersCached: number;
  lastCachedTimestamp: number | null;
  cachedKeys: string[]; // e.g. ["JHN_1", "ROM_8"]
}

// Get raw stored map of chapters
function getStoredChaptersMap(): Record<string, StoredChapterData> {
  try {
    const raw = localStorage.getItem(OFFLINE_CHAPTERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('Failed to read offline chapters map:', e);
    return {};
  }
}

// Save raw map of chapters
function saveStoredChaptersMap(map: Record<string, StoredChapterData>) {
  try {
    localStorage.setItem(OFFLINE_CHAPTERS_KEY, JSON.stringify(map));
  } catch (e) {
    console.warn('LocalStorage full or quota reached when saving chapter:', e);
  }
}

/**
 * Saves a chapter to the local offline cache
 */
export function saveOfflineChapter(
  bookId: string,
  chapter: number,
  bookNameAm: string,
  bookNameEn: string,
  verses: BibleVerse[]
): void {
  if (!verses || verses.length === 0) return;

  const key = `${bookId.toUpperCase()}_${chapter}`;
  const map = getStoredChaptersMap();
  map[key] = {
    bookId: bookId.toUpperCase(),
    bookNameAm,
    bookNameEn,
    chapter,
    verses,
    cachedAt: Date.now(),
  };

  saveStoredChaptersMap(map);
}

/**
 * Retrieves a chapter from offline storage (either curated SEED_CHAPTERS or user-cached chapters)
 */
export function getOfflineChapter(bookId: string, chapter: number): BibleVerse[] | null {
  const key = `${bookId.toUpperCase()}_${chapter}`;

  // 1. Check seed curated canonical chapters first
  if (SEED_CHAPTERS[key] && SEED_CHAPTERS[key].length > 0) {
    return SEED_CHAPTERS[key];
  }

  // 2. Check user local persistent cache
  const map = getStoredChaptersMap();
  if (map[key] && map[key].verses && map[key].verses.length > 0) {
    return map[key].verses;
  }

  return null;
}

/**
 * Checks if a specific chapter is available offline
 */
export function isChapterAvailableOffline(bookId: string, chapter: number): boolean {
  const key = `${bookId.toUpperCase()}_${chapter}`;
  if (SEED_CHAPTERS[key]) return true;
  const map = getStoredChaptersMap();
  return !!(map[key] && map[key].verses?.length > 0);
}

/**
 * Returns statistics about offline stored chapters
 */
export function getOfflineCacheStats(): OfflineCacheStats {
  const map = getStoredChaptersMap();
  const dynamicKeys = Object.keys(map);
  const seedKeys = Object.keys(SEED_CHAPTERS);
  const uniqueKeys = Array.from(new Set([...seedKeys, ...dynamicKeys]));

  let lastTimestamp: number | null = null;
  dynamicKeys.forEach((k) => {
    const time = map[k]?.cachedAt;
    if (time && (!lastTimestamp || time > lastTimestamp)) {
      lastTimestamp = time;
    }
  });

  return {
    totalChaptersCached: uniqueKeys.length,
    lastCachedTimestamp: lastTimestamp,
    cachedKeys: uniqueKeys,
  };
}

/**
 * Pre-cache all curated core theological & devotional chapters into local offline store
 */
export function initializeSeedChaptersInOfflineStorage(): void {
  const map = getStoredChaptersMap();
  let modified = false;

  Object.entries(SEED_CHAPTERS).forEach(([key, verses]) => {
    const parts = key.split('_');
    const bId = parts[0];
    const chNum = parseInt(parts[1], 10);
    const book = getBookById(bId);

    if (!map[key]) {
      map[key] = {
        bookId: bId,
        bookNameAm: book?.nameAm || bId,
        bookNameEn: book?.nameEn || bId,
        chapter: chNum,
        verses,
        cachedAt: Date.now(),
      };
      modified = true;
    }
  });

  if (modified) {
    saveStoredChaptersMap(map);
  }
}
