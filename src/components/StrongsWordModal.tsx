import React from 'react';
import { X, BookOpen, Sparkles, Volume2, Globe, ExternalLink, Bookmark, Hash } from 'lucide-react';
import { StrongsWord, BibleBook } from '../types';

interface StrongsWordModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: StrongsWord | null;
  book?: BibleBook;
  chapter?: number;
  verse?: number;
  onAskTheologyAssistant?: (prompt: string) => void;
}

export const StrongsWordModal: React.FC<StrongsWordModalProps> = ({
  isOpen,
  onClose,
  word,
  book,
  chapter,
  verse,
  onAskTheologyAssistant,
}) => {
  if (!isOpen || !word) return null;

  const isHebrew = word.strongsNumber.startsWith('H');
  const langName = isHebrew ? 'ዕብራይስጥ (Biblical Hebrew / BHS)' : 'ግሪክኛ (Biblical Greek / NA28)';

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const textToSpeak = word.wordOriginal || word.transliteration;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = isHebrew ? 'he-IL' : 'el-GR';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAskAssistant = () => {
    if (onAskTheologyAssistant) {
      const prompt = `እባክዎ የ${isHebrew ? 'ዕብራይስጥ' : 'ግሪክኛ'} ቃል "${word.wordOriginal}" (${word.transliteration} / Strong's ${word.strongsNumber}) በ${book ? `${book.nameAm} ${chapter}:${verse}` : 'በመጽሐፍ ቅዱስ'} ውስጥ ያለውን ጥልቅ ቲኦሎጂካልና ወንጌላዊ ትርጉም (Theological & Exegetical significance)፣ የወንጌል ፋይዳውን እና በብሉይና አዲስ ኪዳን ውስጥ ያለውን አጠቃቀም በዝርዝር አስረዱኝ።`;
      onAskTheologyAssistant(prompt);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs" onClick={onClose}>
      <div 
        className="bg-stone-900 border border-amber-500/40 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-800 bg-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1">
              <Hash className="w-3.5 h-3.5" />
              <span>{word.strongsNumber}</span>
            </span>
            <div>
              <h3 className="text-sm font-bold text-stone-200">
                የመጀመሪያ ቋንቋ የቃላት ጥናት (Lexicon & Morphology)
              </h3>
              <p className="text-[11px] text-stone-400">{langName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Display Section */}
        <div className="p-6 bg-gradient-to-b from-stone-950/80 to-stone-900 border-b border-stone-800 space-y-3 text-center">
          {/* Original Word typography */}
          <div 
            dir={isHebrew ? 'rtl' : 'ltr'} 
            className={`text-4xl sm:text-5xl font-bold text-amber-300 font-serif tracking-wide py-2 ${isHebrew ? 'font-mono' : ''}`}
          >
            {word.wordOriginal}
          </div>

          {/* Transliteration and Pronunciation */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-base text-stone-300 font-medium italic">
              /{word.transliteration}/
            </span>
            <button
              onClick={handleSpeak}
              className="p-1.5 rounded-full bg-stone-800 hover:bg-amber-600/30 text-amber-400 hover:text-amber-200 transition-colors"
              title="አነባበብ አድምጥ"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Lemma & Part of Speech */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
            {word.lemma && (
              <span className="px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300">
                <strong className="text-stone-400 font-normal">Root/Lemma: </strong>{word.lemma}
              </span>
            )}
            {word.partOfSpeech && (
              <span className="px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300">
                <strong className="text-amber-400/70 font-normal">Part of Speech: </strong>{word.partOfSpeech}
              </span>
            )}
          </div>
        </div>

        {/* Lexical Meanings & Translations */}
        <div className="p-5 space-y-4 max-h-[45vh] overflow-y-auto">
          {/* Amharic Theological Definition */}
          {word.amharicMeaning && (
            <div className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-3.5 space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>የአማርኛ ፍቺና ቲኦሎጂካል ትርጉም</span>
              </div>
              <p className="text-sm text-stone-200 leading-relaxed">
                {word.amharicMeaning}
              </p>
            </div>
          )}

          {/* English Lexicon Definition */}
          {word.definition && (
            <div className="bg-stone-950/60 border border-stone-800 rounded-xl p-3.5 space-y-1">
              <div className="text-xs font-semibold text-stone-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                <span>Strong's Lexicon Definition</span>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed">
                {word.definition}
              </p>
            </div>
          )}

          {/* Context reference if available */}
          {book && chapter && verse && (
            <div className="text-xs text-stone-400 bg-stone-800/40 p-2.5 rounded-lg flex items-center justify-between">
              <span>ጥቅስ፡ {book.nameAm} {chapter}:{verse}</span>
              <span className="text-stone-500">{book.nameEn} {chapter}:{verse}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-3">
          <button
            onClick={handleAskAssistant}
            className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>በቲኦሎጂ ረዳት ጠይቅ</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs sm:text-sm font-medium transition-colors"
          >
            ዝጋ
          </button>
        </div>
      </div>
    </div>
  );
};
