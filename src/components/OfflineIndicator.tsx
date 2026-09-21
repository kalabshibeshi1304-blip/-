import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, HardDriveDownload, CheckCircle2 } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { getOfflineCacheStats } from '../utils/offlineBibleStorage';

interface OfflineIndicatorProps {
  onOpenOfflineManager?: () => void;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ onOpenOfflineManager }) => {
  const isOnline = useOnlineStatus();
  const [stats, setStats] = useState(() => getOfflineCacheStats());
  const [showBackOnlineToast, setShowBackOnlineToast] = useState<boolean>(false);
  const [wasOffline, setWasOffline] = useState<boolean>(false);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
      setStats(getOfflineCacheStats());
    } else if (wasOffline) {
      setShowBackOnlineToast(true);
      const timer = setTimeout(() => setShowBackOnlineToast(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (showBackOnlineToast) {
    return (
      <div 
        id="online-restored-toast"
        className="fixed bottom-5 left-4 sm:left-6 z-50 flex items-center gap-2.5 rounded-xl bg-emerald-950/90 border border-emerald-500/40 px-3.5 py-2 text-xs font-medium text-emerald-200 shadow-xl shadow-emerald-950/50 backdrop-blur-md transition-all animate-bounce"
      >
        <Wifi className="w-4 h-4 text-emerald-400" />
        <span>የኢንተርኔት ግንኙነት ተመልሷል (Online)።</span>
      </div>
    );
  }

  if (isOnline) return null;

  return (
    <div 
      id="offline-status-banner"
      className="fixed bottom-5 left-4 sm:left-6 z-50 flex items-center gap-3 rounded-2xl bg-amber-950/95 border border-amber-500/50 px-4 py-2.5 text-xs text-amber-200 shadow-2xl shadow-stone-950/80 backdrop-blur-md transition-all"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <WifiOff className="w-4 h-4 text-amber-400" />
      </div>

      <div className="flex flex-col">
        <span className="font-semibold text-amber-100">ከመስመር ውጭ (Offline Mode)</span>
        <span className="text-[11px] text-amber-300/80">
          የተቀመጡ ምዕራፎች ({stats.totalChaptersCached}) እና ማስታወሻዎች ያለ ኔትወርክ እየሰሩ ነው።
        </span>
      </div>

      {onOpenOfflineManager && (
        <button
          onClick={onOpenOfflineManager}
          className="ml-2 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-[11px] transition-colors cursor-pointer"
        >
          ማከማቻ
        </button>
      )}
    </div>
  );
};
