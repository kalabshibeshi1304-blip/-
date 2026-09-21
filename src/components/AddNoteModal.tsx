import React, { useState, useEffect } from 'react';
import { X, FileText, Check } from 'lucide-react';
import { BibleBook } from '../types';

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBook: BibleBook;
  currentChapter: number;
  verseNum?: number;
  onSaveNote: (title: string, content: string, bookId: string, chapter: number, verse?: number) => void;
}

export const AddNoteModal: React.FC<AddNoteModalProps> = ({
  isOpen,
  onClose,
  currentBook,
  currentChapter,
  verseNum,
  onSaveNote,
}) => {
  const defaultTitle = `${currentBook.nameAm} ${currentChapter}${verseNum ? `:${verseNum}` : ''} ማስታወሻ`;
  const [title, setTitle] = useState<string>(defaultTitle);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSaveNote(
      title.trim() || defaultTitle,
      content.trim(),
      currentBook.id,
      currentChapter,
      verseNum
    );
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-3.5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-sm text-stone-100">የግል ማስታወሻ መመዝገቢያ</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-5 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300">
              ርዕስ
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="የማስታወሻው ርዕስ..."
              className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300">
              ማስታወሻ / ማሰላሰያ
            </label>
            <textarea
              autoFocus
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="በዚህ ክፍል ያገኙትን መንፈሳዊ ትምህርት፣ ጸሎት ወይም ግንዛቤ ይጻፉ..."
              className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-xs sm:text-sm text-stone-100 font-ethiopic-sans focus:outline-none focus:border-amber-500 leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
            >
              ይቅር
            </button>
            <button
              type="submit"
              disabled={!content.trim()}
              className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>አስቀምጥ</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
