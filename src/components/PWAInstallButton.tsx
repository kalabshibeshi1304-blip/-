import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState<boolean>(false);

  // If already installed in standalone mode, do not show install button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="pwa-install-btn"
        onClick={install}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-3.5 py-1.5 text-xs font-semibold text-stone-950 shadow-md shadow-amber-900/30 transition-all cursor-pointer"
        title="መተግበሪያውን በስልክዎ ወይም በኮምፒውተርዎ ላይ ይጫኑ (PWA Install)"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">መተግበሪያውን ጫን</span>
        <span className="sm:hidden">ጫን</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="pwa-ios-install-btn"
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-950/40 hover:bg-amber-900/40 px-3 py-1.5 text-xs font-medium text-amber-300 transition-colors"
          title="Install Kal Bible on iPhone/iPad"
        >
          <Smartphone className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">በiPhone ላይ ጫን</span>
          <span className="sm:hidden">ጫን</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-2xl bg-stone-900 border border-amber-900/40 p-6 shadow-2xl text-stone-100 relative">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-1 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-100">በiPhone / iPad ላይ ጫን</h3>
                  <p className="text-xs text-amber-300/80">ያለ ኢንተርኔት ከመስመር ውጭ ለመጠቀም</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-300 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[11px] shrink-0">1</span>
                  <p>በSafari አሳሽ የግርጌ ክፍል ያለውን <strong>Share (ማጋሪያ)</strong> ምልክት ይጫኑ።</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[11px] shrink-0">2</span>
                  <p>ዝቅ ብለው <strong>"Add to Home Screen" (ወደ መነሻ ገጽ አክል)</strong> የሚለውን ይምረጡ።</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[11px] shrink-0">3</span>
                  <p>በቀኝ በኩል <strong>"Add"</strong> የሚለውን በመጫን እንደ ቋሚ አፕ ይጠቀሙ።</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ሁሉም ማስታወሻዎችዎ እና የተቀመጡ ምዕራፎች ያለ ኔትወርክ ይሰራሉ።</span>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-amber-600 hover:bg-amber-500 py-2.5 text-xs font-semibold text-stone-950 transition-colors"
              >
                ተረድቻለሁ (እሺ)
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
