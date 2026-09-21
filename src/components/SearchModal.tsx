import React, { useState, useMemo, useEffect } from 'react';
import { X, Search, BookOpen, ChevronRight } from 'lucide-react';
import { BibleBook } from '../types';
import { PROTESTANT_BOOKS, SEED_CHAPTERS } from '../data/bibleData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPassage: (book: BibleBook, chapter: number, verse?: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPassage,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search across books and seeded verses
  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return { books: [], verses: [] };

    // Book matches
    const matchedBooks = PROTESTANT_BOOKS.filter((b) => 
      b.nameAm.toLowerCase().includes(term) ||
      b.nameEn.toLowerCase().includes(term) ||
      b.abbrAm.toLowerCase().includes(term) ||
      b.abbrEn.toLowerCase().includes(term)
    );

    // Verse matches in pre-loaded chapters
    const matchedVerses: { book: BibleBook; chapter: number; verse: number; textAm: string }[] = [];
    
    Object.entries(SEED_CHAPTERS).forEach(([key, verses]) => {
      const [bookId, chStr] = key.split('_');
      const book = PROTESTANT_BOOKS.find((b) => b.id === bookId);
      if (!book) return;
      const chapter = parseInt(chStr, 10);

      verses.forEach((v) => {
        if (v.textAm.toLowerCase().includes(term) || v.textEn.toLowerCase().includes(term)) {
          if (matchedVerses.length < 25) {
            matchedVerses.push({
              book,
              chapter,
              verse: v.verse,
              textAm: v.textAm,
            });
          }
        }
      });
    });

    return { books: matchedBooks, verses: matchedVerses };
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-stone-800 bg-stone-950 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ጥቅስ ወይም መጽሐፍ ፈልግ (ለምሳሌ፡ ጸጋ፣ እምነት፣ ሮሜ፣ ፍቅር)..."
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-100 placeholder-stone-500 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-stone-400 hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-400 hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!searchTerm.trim() ? (
            <div className="py-12 text-center text-stone-500 space-y-2">
              <Search className="w-8 h-8 mx-auto text-stone-600" />
              <p className="text-sm">የሚፈልጉትን ቃል ወይም የመጽሐፍ ስም ያስገቡ።</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
                {['ጸጋ', 'እምነት', 'ክርስቶስ', 'ፍቅር', 'ድነት', 'ሮሜ', 'ዮሐንስ'].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setSearchTerm(kw)}
                    className="px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 hover:bg-amber-600/30 hover:text-amber-200 transition-colors"
                  >
                    #{kw}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Matched Books */}
              {searchResults.books.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    መጻሕፍት ({searchResults.books.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {searchResults.books.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onSelectPassage(b, 1);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-stone-950/70 hover:bg-stone-800 border border-stone-800 flex items-center justify-between text-left transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-sm text-stone-100">
                            {b.nameAm}
                          </div>
                          <div className="text-xs text-stone-400">
                            {b.nameEn} • {b.totalChapters} ምዕራፎች
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-stone-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Verses */}
              {searchResults.verses.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    የተገኙ ጥቅሶች ({searchResults.verses.length})
                  </div>
                  <div className="space-y-2">
                    {searchResults.verses.map((res, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onSelectPassage(res.book, res.chapter, res.verse);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-stone-950/70 hover:bg-stone-800 border border-stone-800 space-y-1.5 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-400 font-mono">
                            {res.book.nameAm} ምዕራፍ {res.chapter}:{res.verse}
                          </span>
                          <span className="text-[11px] text-stone-500 group-hover:text-stone-300 flex items-center gap-1">
                            <span>ክፈት</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans line-clamp-2">
                          {res.textAm}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.books.length === 0 && searchResults.verses.length === 0 && (
                <div className="py-12 text-center text-stone-500 text-sm">
                  ምንም የተገኘ ውጤት የለም። እባክዎ በሌላ ቃል ይፈልጉ።
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
