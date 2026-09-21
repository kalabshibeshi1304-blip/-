import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Bookmark, 
  Highlighter, 
  Trash2, 
  ExternalLink, 
  Plus,
  BookOpen
} from 'lucide-react';
import { PersonalStudyNote, VerseHighlight, Bookmark as BookmarkType, BibleBook } from '../types';
import { PROTESTANT_BOOKS } from '../data/bibleData';

interface NotesAndBookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  notes: PersonalStudyNote[];
  highlights: VerseHighlight[];
  bookmarks: BookmarkType[];
  onDeleteNote: (id: string) => void;
  onDeleteBookmark: (id: string) => void;
  onDeleteHighlight: (id: string) => void;
  onNavigateToPassage: (bookId: string, chapter: number, verse?: number) => void;
}

export const NotesAndBookmarksModal: React.FC<NotesAndBookmarksModalProps> = ({
  isOpen,
  onClose,
  notes,
  highlights,
  bookmarks,
  onDeleteNote,
  onDeleteBookmark,
  onDeleteHighlight,
  onNavigateToPassage,
}) => {
  const [activeTab, setActiveTab] = useState<'notes' | 'bookmarks' | 'highlights'>('notes');

  if (!isOpen) return null;

  const getBookName = (bookId: string) => {
    return PROTESTANT_BOOKS.find((b) => b.id === bookId)?.nameAm || bookId;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-100">
                የግል ማጥኛ ማስታወሻዎችና ዕልባቶች
              </h2>
              <p className="text-xs text-stone-400">
                ያስታወሷቸው፣ ያደመቋቸውና ዕልባት ያደረጓቸው ጥቅሶች
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

        {/* Tabs Bar */}
        <div className="flex border-b border-stone-800 bg-stone-950/60 px-4 pt-2">
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'notes'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>ማስታወሻዎች ({notes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'bookmarks'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>ዕልባቶች ({bookmarks.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('highlights')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'highlights'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Highlighter className="w-4 h-4" />
            <span>የደመቁ ጥቅሶች ({highlights.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {/* Notes Tab */}
          {activeTab === 'notes' && (
            <div>
              {notes.length === 0 ? (
                <div className="py-16 text-center text-stone-500 space-y-2">
                  <FileText className="w-10 h-10 mx-auto text-stone-600" />
                  <p className="text-sm">ምንም የተቀመጠ የግል ማስታወሻ የለም።</p>
                  <p className="text-xs text-stone-500">
                    መጽሐፍ ቅዱስ በሚያነቡበት ጊዜ ቁጥር መርጠው "ማስታወሻ" የሚለውን ይጫኑ።
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="bg-stone-950/70 border border-stone-800 rounded-xl p-4 space-y-2.5 transition-all hover:border-stone-700"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-bold text-sm text-stone-100">
                            {note.title}
                          </h4>
                          <span className="text-xs text-amber-400 font-mono">
                            {note.bookNameAm} ምዕራፍ {note.chapter}{note.verse ? `:${note.verse}` : ''}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              onNavigateToPassage(note.bookId, note.chapter, note.verse);
                              onClose();
                            }}
                            className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-amber-300"
                            title="ወደ ክፍሉ ሂድ"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onDeleteNote(note.id)}
                            className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-red-400"
                            title="አጥፋ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 whitespace-pre-wrap font-ethiopic-sans leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Bookmarks Tab */}
          {activeTab === 'bookmarks' && (
            <div>
              {bookmarks.length === 0 ? (
                <div className="py-16 text-center text-stone-500 space-y-2">
                  <Bookmark className="w-10 h-10 mx-auto text-stone-600" />
                  <p className="text-sm">ምንም የተቀመጠ ዕልባት የለም።</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {bookmarks.map((bm) => (
                    <div
                      key={bm.id}
                      className="bg-stone-950/70 border border-stone-800 rounded-xl p-3.5 flex items-center justify-between gap-3 hover:border-stone-700"
                    >
                      <div 
                        className="cursor-pointer flex-1"
                        onClick={() => {
                          onNavigateToPassage(bm.bookId, bm.chapter, bm.verse);
                          onClose();
                        }}
                      >
                        <div className="text-xs font-bold text-amber-300 font-mono">
                          {bm.bookNameAm} ምዕራፍ {bm.chapter}:{bm.verse}
                        </div>
                        {bm.previewTextAm && (
                          <p className="text-xs text-stone-400 line-clamp-1 italic mt-0.5">
                            "{bm.previewTextAm}"
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            onNavigateToPassage(bm.bookId, bm.chapter, bm.verse);
                            onClose();
                          }}
                          className="p-1.5 rounded-md text-stone-400 hover:text-amber-300"
                          title="ክፈት"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteBookmark(bm.id)}
                          className="p-1.5 rounded-md text-stone-400 hover:text-red-400"
                          title="አስወግድ"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div>
              {highlights.length === 0 ? (
                <div className="py-16 text-center text-stone-500 space-y-2">
                  <Highlighter className="w-10 h-10 mx-auto text-stone-600" />
                  <p className="text-sm">ምንም የደመቀ ጥቅስ የለም።</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {highlights.map((hl) => (
                    <div
                      key={hl.id}
                      className="bg-stone-950/70 border border-stone-800 rounded-xl p-3.5 flex items-center justify-between gap-3 hover:border-stone-700"
                    >
                      <div
                        className="cursor-pointer flex-1"
                        onClick={() => {
                          onNavigateToPassage(hl.bookId, hl.chapter, hl.verse);
                          onClose();
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full ${
                            hl.color === 'yellow' ? 'bg-amber-400' :
                            hl.color === 'green' ? 'bg-emerald-400' :
                            hl.color === 'blue' ? 'bg-sky-400' :
                            hl.color === 'purple' ? 'bg-purple-400' : 'bg-orange-400'
                          }`} />
                          <span className="text-xs font-bold text-stone-200 font-mono">
                            {getBookName(hl.bookId)} ምዕራፍ {hl.chapter}:{hl.verse}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => onDeleteHighlight(hl.id)}
                        className="p-1.5 rounded-md text-stone-400 hover:text-red-400"
                        title="ማድመቂያውን አጥፋ"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-stone-800 bg-stone-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold transition-colors"
          >
            ዝጋ
          </button>
        </div>
      </div>
    </div>
  );
};
