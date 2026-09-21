import React, { useState, useEffect } from 'react';
import { X, Heart, Sparkles, Quote, BookOpen, ChevronRight } from 'lucide-react';
import { DAILY_DEVOTIONALS } from '../data/theologyData';

interface DailyDevotionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToScripture?: (passageRef: string) => void;
}

export const DailyDevotionalModal: React.FC<DailyDevotionalModalProps> = ({
  isOpen,
  onClose,
  onNavigateToScripture,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDevo = DAILY_DEVOTIONALS[currentIndex % DAILY_DEVOTIONALS.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-amber-400/20" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-100">
                የዕለቱ ቃልና መንፈሳዊ ማሰላሰያ
              </h3>
              <p className="text-xs text-amber-400">
                Daily Protestant Devotional & Meditation
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 font-ethiopic-sans text-stone-200">
          {/* Title & Ref */}
          <div className="space-y-1.5 border-b border-stone-800/80 pb-4">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800/60">
              {currentDevo.passageRef}
            </span>
            <h4 className="text-xl font-bold text-stone-100 pt-2">
              {currentDevo.title}
            </h4>
          </div>

          {/* Scripture Verse Quote */}
          <div className="bg-gradient-to-br from-amber-950/30 to-stone-950 border border-amber-900/40 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <Quote className="w-4 h-4" />
              <span>የእግዚአብሔር ቃል</span>
            </div>
            <blockquote className="text-base sm:text-lg font-ethiopic-serif italic leading-relaxed text-amber-100">
              "{currentDevo.scriptureAm}"
            </blockquote>
          </div>

          {/* Spiritual Reflection */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>መንፈሳዊ ማሰላሰያ (Reflection)</span>
            </h5>
            <p className="text-sm leading-relaxed text-stone-200 font-normal">
              {currentDevo.reflectionAm}
            </p>
          </div>

          {/* Prayer Section */}
          <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-4 space-y-1.5">
            <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              የዕለቱ ጸሎት
            </h5>
            <p className="text-xs sm:text-sm italic text-stone-300 leading-relaxed font-ethiopic-serif">
              "{currentDevo.prayerAm}"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-stone-800 bg-stone-950 flex items-center justify-end gap-3">
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>ሌላ ማሰላሰያ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
