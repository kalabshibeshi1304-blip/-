import React, { useState, useMemo, useEffect } from 'react';
import { X, Search, BookOpen, Layers, ChevronRight } from 'lucide-react';
import { BibleBook, Testament, BibleCategory } from '../types';
import { PROTESTANT_BOOKS } from '../data/bibleData';

interface BookSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBook: BibleBook;
  currentChapter: number;
  onSelectBookAndChapter: (book: BibleBook, chapter: number) => void;
}

export const BookSelectorModal: React.FC<BookSelectorModalProps> = ({
  isOpen,
  onClose,
  currentBook,
  currentChapter,
  onSelectBookAndChapter,
}) => {
  const [selectedTestament, setSelectedTestament] = useState<Testament>(currentBook.testament);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBookForChapters, setActiveBookForChapters] = useState<BibleBook>(currentBook);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter books
  const filteredBooks = useMemo(() => {
    return PROTESTANT_BOOKS.filter((book) => {
      // Testament filter
      if (book.testament !== selectedTestament) return false;
      
      // Category filter
      if (selectedCategory !== 'all' && book.category !== selectedCategory) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchAm = book.nameAm.toLowerCase().includes(query);
        const matchEn = book.nameEn.toLowerCase().includes(query);
        const matchAbbr = book.abbrAm.toLowerCase().includes(query) || book.abbrEn.toLowerCase().includes(query);
        return matchAm || matchEn || matchAbbr;
      }

      return true;
    });
  }, [selectedTestament, selectedCategory, searchQuery]);

  // Categories for current testament
  const availableCategories = useMemo(() => {
    const cats = new Set<BibleCategory>();
    PROTESTANT_BOOKS.filter((b) => b.testament === selectedTestament).forEach((b) => cats.add(b.category));
    return Array.from(cats);
  }, [selectedTestament]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs" onClick={onClose}>
      <div 
        className="bg-stone-900 border border-stone-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-3 border-b border-stone-800 flex items-center justify-between bg-stone-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-100">
                የመጽሐፍ ቅዱስ መጻሕፍትና ምዕራፎች
              </h2>
              <p className="text-xs text-stone-400">
                የፕሮቴስታንት ቀኖና 66 መጻሕፍት (39 ብሉይ + 27 አዲስ ኪዳን)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Testament Switcher & Search Bar */}
        <div className="p-4 border-b border-stone-800 bg-stone-900/90 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Testament Tabs */}
            <div className="flex w-full sm:w-auto p-1 bg-stone-950 rounded-lg border border-stone-800">
              <button
                onClick={() => {
                  setSelectedTestament('OT');
                  setSelectedCategory('all');
                }}
                className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  selectedTestament === 'OT'
                    ? 'bg-amber-600 text-stone-100 shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                ብሉይ ኪዳን (39)
              </button>
              <button
                onClick={() => {
                  setSelectedTestament('NT');
                  setSelectedCategory('all');
                }}
                className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  selectedTestament === 'NT'
                    ? 'bg-amber-600 text-stone-100 shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                አዲስ ኪዳን (27)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="መጽሐፍ ፈልግ (ለምሳሌ፡ ሮሜ፣ ዘፍ፣ ዮሐ)..."
                className="w-full bg-stone-950 border border-stone-700 rounded-lg pl-9 pr-3 py-1.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-stone-200 text-stone-900 font-semibold'
                  : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
              }`}
            >
              ሁሉም
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-medium'
                    : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area: Two Columns (Books List on Left, Chapters on Right) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[350px]">
          {/* Books List (Column 1) */}
          <div className="md:col-span-6 lg:col-span-5 border-r border-stone-800 overflow-y-auto p-3 space-y-1.5 max-h-[50vh] md:max-h-full">
            <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider px-2 pb-1">
              መጻሕፍት ({filteredBooks.length})
            </div>
            {filteredBooks.length === 0 ? (
              <div className="p-6 text-center text-stone-500 text-sm">
                ምንም መጽሐፍ አልተገኘም።
              </div>
            ) : (
              filteredBooks.map((book) => {
                const isCurrent = activeBookForChapters.id === book.id;
                return (
                  <button
                    key={book.id}
                    onClick={() => setActiveBookForChapters(book)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all ${
                      isCurrent
                        ? 'bg-amber-600/20 border border-amber-500/40 text-amber-200 shadow-xs'
                        : 'hover:bg-stone-800/80 text-stone-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded bg-stone-950 border border-stone-800 flex items-center justify-center text-xs font-mono text-stone-400 font-bold">
                        {book.order}
                      </span>
                      <div>
                        <div className="font-semibold text-sm leading-snug">
                          {book.nameAm}
                        </div>
                        <div className="text-xs text-stone-400 flex items-center gap-1.5">
                          <span>{book.nameEn}</span>
                          <span>•</span>
                          <span className="text-stone-400">{book.totalChapters} ምዕራፎች</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isCurrent ? 'text-amber-400 translate-x-1' : 'text-stone-600'}`} />
                  </button>
                );
              })
            )}
          </div>

          {/* Chapters Grid (Column 2) */}
          <div className="md:col-span-6 lg:col-span-7 overflow-y-auto p-4 bg-stone-950/40">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800/80 mb-4">
              <div>
                <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                  ምዕራፍ ምረጥ
                </span>
                <h3 className="text-lg font-bold text-stone-100">
                  {activeBookForChapters.nameAm} ({activeBookForChapters.nameEn})
                </h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-stone-800 text-stone-300 font-mono">
                {activeBookForChapters.totalChapters} ምዕራፍ
              </span>
            </div>

            {/* Chapters Numbers Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {Array.from({ length: activeBookForChapters.totalChapters }, (_, i) => i + 1).map((chNum) => {
                const isSelected =
                  activeBookForChapters.id === currentBook.id && currentChapter === chNum;
                return (
                  <button
                    key={chNum}
                    onClick={() => {
                      onSelectBookAndChapter(activeBookForChapters, chNum);
                      onClose();
                    }}
                    className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-amber-600 text-white ring-2 ring-amber-400 font-bold scale-105 shadow-md'
                        : 'bg-stone-900 hover:bg-amber-600/30 hover:text-amber-200 text-stone-300 border border-stone-800 hover:border-amber-500/40'
                    }`}
                  >
                    {chNum}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-stone-800 bg-stone-950 flex items-center justify-between text-xs text-stone-400">
          <span>የኢትዮጵያ መጽሐፍ ቅዱስ ማኅበር 66 መጻሕፍት (1962/1879 ዓ.ም)</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-stone-800 hover:bg-stone-700 rounded text-stone-200 font-medium transition-colors"
          >
            ዝጋ
          </button>
        </div>
      </div>
    </div>
  );
};
