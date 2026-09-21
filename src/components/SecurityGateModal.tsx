import React, { useState } from 'react';
import { 
  ShieldCheck, 
  KeyRound, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  BookOpen, 
  ShieldAlert,
  Smartphone,
  Info
} from 'lucide-react';
import { getSecurityConfig, unlockAndActivate } from '../utils/securityManager';

interface SecurityGateModalProps {
  isOpen: boolean;
  onUnlocked: (isMaster: boolean) => void;
}

export const SecurityGateModal: React.FC<SecurityGateModalProps> = ({ isOpen, onUnlocked }) => {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const config = getSecurityConfig();

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!passcode.trim()) {
      setErrorMsg('እባክዎ የይለፍ ቃል ወይም የማግበሪያ ቁልፍ ያስገቡ');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const res = unlockAndActivate(passcode);
      if (res.success) {
        setSuccessMsg(res.message);
        setTimeout(() => {
          setIsSubmitting(false);
          onUnlocked(res.isMaster);
        }, 600);
      } else {
        setIsSubmitting(false);
        setErrorMsg(res.message);
      }
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/95 backdrop-blur-md overflow-y-auto">
      {/* Background glowing aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-stone-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* App Branding & Icon */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-500 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-900/30 mb-4">
            <BookOpen className="w-8 h-8 text-amber-100" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100 flex items-center justify-center gap-2">
            <span>Kal (ቃል) መጽሐፍ ቅዱስ</span>
          </h2>
          <p className="text-xs text-amber-400/90 font-medium mt-1">
            የተፈቀደላቸው ተጠቃሚዎች ማረጋገጫ (Protected Access)
          </p>
        </div>

        {/* Security Notice Card */}
        <div className="mb-6 p-3.5 bg-stone-950/70 border border-stone-800/90 rounded-xl flex items-start gap-3 text-left">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-300 leading-relaxed">
            <p className="font-semibold text-amber-300 mb-0.5">የይለፍ ቃል ወይም የማግበሪያ ቁልፍ ያስፈልጋል</p>
            <p className="text-stone-400">
              ይህ መተግበሪያ በባለቤቱ ፈቃድ ብቻ የተገደበ ነው። እባክዎ ከባለቤቱ የተሰጠዎትን የማግበሪያ ቁልፍ ወይም የይለፍ ቃል ያስገቡ።
            </p>
          </div>
        </div>

        {/* Unlock Form */}
        <form onSubmit={handleUnlock} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                <span>የይለፍ ቃል / የማግበሪያ ቁልፍ (Passcode / Key)</span>
              </span>
              <span className="text-[11px] text-stone-400 font-mono">
                {config.deviceId}
              </span>
            </label>
            <div className="relative">
              <input
                id="security-passcode-input"
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  if (errorMsg) setErrorMsg(null);
                }}
                placeholder="ምሳሌ፡ KAL2026 ወይም KAL-777"
                autoFocus
                className="w-full pl-10 pr-10 py-3 bg-stone-950 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-400 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-center tracking-wider"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                <Lock className="w-4 h-4 text-amber-400/80" />
              </div>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
                title={showPassword ? 'ደብቅ' : 'አሳይ'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 bg-rose-950/60 border border-rose-800/80 rounded-xl flex items-start gap-2 text-rose-200 text-xs animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success Message */}
          {successMsg && (
            <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl flex items-center gap-2 text-emerald-200 text-xs animate-in fade-in duration-150">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            id="unlock-app-btn"
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-900/40 hover:shadow-amber-900/60 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                <span>በማረጋገጥ ላይ...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Unlock className="w-4 h-4" />
                <span>መተግበሪያውን ክፈት (Unlock & Access)</span>
              </span>
            )}
          </button>
        </form>

        {/* Footer info & hints */}
        <div className="mt-6 pt-4 border-t border-stone-800/80 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-stone-400 mb-2">
            <Smartphone className="w-3.5 h-3.5 text-stone-400" />
            <span>የዚህ መሣሪያ መለያ፡ <strong className="text-stone-300 font-mono">{config.deviceId}</strong></span>
          </div>
          <p className="text-[11px] text-stone-400 leading-normal">
            የመጀመሪያው የባለቤት ማስተር የይለፍ ቃል፡ <code className="bg-stone-800 text-amber-300 px-1.5 py-0.5 rounded border border-stone-700">KAL2026</code> ነው። ከገቡ በኋላ በአድሚን ፓናል መቀየር ይችላሉ።
          </p>
        </div>

      </div>
    </div>
  );
};
