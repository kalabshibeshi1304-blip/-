import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Key, 
  Lock, 
  Unlock, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  X, 
  UserCheck, 
  ShieldAlert, 
  Smartphone, 
  RefreshCw, 
  Save, 
  AlertTriangle,
  Send,
  Eye,
  EyeOff
} from 'lucide-react';
import { 
  getSecurityConfig, 
  saveSecurityConfig, 
  generateActivationCode, 
  lockCurrentDevice, 
  AuthorizedUserKey, 
  SecurityConfig 
} from '../utils/securityManager';

interface AdminSecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLockApp: () => void;
}

export const AdminSecurityModal: React.FC<AdminSecurityModalProps> = ({
  isOpen,
  onClose,
  onLockApp,
}) => {
  const [config, setConfig] = useState<SecurityConfig>(() => getSecurityConfig());
  const [newMasterPass, setNewMasterPass] = useState('');
  const [showMasterPass, setShowMasterPass] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // New key form state
  const [newUserName, setNewUserName] = useState('');
  const [newKeyCode, setNewKeyCode] = useState(() => generateActivationCode());
  const [newKeyNote, setNewKeyNote] = useState('');
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  if (!isOpen) return null;

  const refreshConfig = () => {
    setConfig(getSecurityConfig());
  };

  const handleUpdateMasterPasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMasterPass.trim()) return;
    const current = getSecurityConfig();
    current.masterPasscode = newMasterPass.trim();
    saveSecurityConfig(current);
    setConfig(current);
    setNewMasterPass('');
    setSaveSuccessMsg('የባለቤት ማስተር የይለፍ ቃል በተሳካ ሁኔታ ተቀይሯል!');
    setTimeout(() => setSaveSuccessMsg(null), 3000);
  };

  const handleToggleSecurityMode = (mode: 'one_time_activation' | 'always_ask') => {
    const current = getSecurityConfig();
    current.securityMode = mode;
    saveSecurityConfig(current);
    setConfig(current);
  };

  const handleAddUserKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newKeyCode.trim()) return;

    const current = getSecurityConfig();
    const newKey: AuthorizedUserKey = {
      id: `key_${Date.now()}`,
      code: newKeyCode.trim().toUpperCase(),
      assignedTo: newUserName.trim(),
      note: newKeyNote.trim() || undefined,
      createdAt: Date.now(),
      isActive: true,
    };

    current.authorizedKeys = [newKey, ...current.authorizedKeys];
    saveSecurityConfig(current);
    setConfig(current);

    // Reset form
    setNewUserName('');
    setNewKeyNote('');
    setNewKeyCode(generateActivationCode());
    setSaveSuccessMsg(`ለ${newKey.assignedTo} የተሰጠ አዲስ የማግበሪያ ቁልፍ ተፈጥሯል!`);
    setTimeout(() => setSaveSuccessMsg(null), 3000);
  };

  const handleToggleKeyActive = (keyId: string) => {
    const current = getSecurityConfig();
    current.authorizedKeys = current.authorizedKeys.map((k) =>
      k.id === keyId ? { ...k, isActive: !k.isActive } : k
    );
    saveSecurityConfig(current);
    setConfig(current);
  };

  const handleDeleteKey = (keyId: string) => {
    const current = getSecurityConfig();
    current.authorizedKeys = current.authorizedKeys.filter((k) => k.id !== keyId);
    saveSecurityConfig(current);
    setConfig(current);
  };

  const handleCopyShareMessage = (key: AuthorizedUserKey) => {
    const shareText = `ሰላም ${key.assignedTo}፤
የቃል (Kal) መጽሐፍ ቅዱስ መተግበሪያ የግል መክፈቻና ማግበሪያ ቁልፍዎ፡

🔑 የማግበሪያ ቁልፍ (Activation Key)፦ ${key.code}

መተግበሪያውን በስልክዎ ወይም በኮምፒውተርዎ ሲከፍቱ ይህንን ቁልፍ በማስገባት የተሟላውን መጽሐፍ ቅዱስና የቲኦሎጂ ጥናት መጠቀም ይችላሉ።`;

    navigator.clipboard.writeText(shareText).then(() => {
      setCopiedKeyId(key.id);
      setTimeout(() => setCopiedKeyId(null), 2500);
    });
  };

  const handleLockThisDevice = () => {
    lockCurrentDevice(false);
    onClose();
    onLockApp();
  };

  const handleRevokeAndRelockAll = () => {
    if (confirm('እርግጠኛ ነዎት? ይህንን ሲያደርጉ ይህ ስልክም ሆነ ሌሎች መሣሪያዎች በሙሉ ዳግም የይለፍ ቃል ይጠየቃሉ።')) {
      lockCurrentDevice(true);
      onClose();
      onLockApp();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl text-stone-100 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800 bg-stone-950/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-amber-100">
                የደኅንነት እና የፈቃድ መቆጣጠሪያ (Security & Access Control)
              </h3>
              <p className="text-xs text-stone-400">
                መተግበሪያውን ማን እንዲጠቀም እንደሚፈቅዱ ይቆጣጠሩ
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Notification Alert */}
          {saveSuccessMsg && (
            <div className="p-3 bg-emerald-950/70 border border-emerald-800 rounded-xl flex items-center gap-2 text-emerald-300 text-xs animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{saveSuccessMsg}</span>
            </div>
          )}

          {/* Section 1: Master Passcode Settings */}
          <div className="bg-stone-950/60 border border-stone-800 rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 mb-2">
              <Key className="w-4 h-4 text-amber-400" />
              <span>የባለቤት ማስተር የይለፍ ቃል (Master Passcode)</span>
            </h4>
            <p className="text-xs text-stone-400 mb-3">
              ይህ የይለፍ ቃል እርስዎ በማንኛውም መሣሪያ ላይ ሙሉ ቁጥጥር እንዲኖርዎ የሚያስችል ዋና የይለፍ ቃል ነው።
            </p>
            
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs text-stone-400">የአሁኑ ማስተር የይለፍ ቃል፡</span>
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-xs font-mono font-bold text-amber-300 tracking-wider">
                {config.masterPasscode}
              </span>
            </div>

            <form onSubmit={handleUpdateMasterPasscode} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type={showMasterPass ? 'text' : 'password'}
                  value={newMasterPass}
                  onChange={(e) => setNewMasterPass(e.target.value)}
                  placeholder="አዲስ የባለቤት የይለፍ ቃል አስገባ..."
                  className="w-full pl-3 pr-9 py-2 bg-stone-900 border border-stone-700 rounded-lg text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="button"
                  onClick={() => setShowMasterPass(!showMasterPass)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                >
                  {showMasterPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
              <button
                type="submit"
                disabled={!newMasterPass.trim()}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>ቀይርና አስቀምጥ</span>
              </button>
            </form>
          </div>

          {/* Section 2: Security Protection Mode */}
          <div className="bg-stone-950/60 border border-stone-800 rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>የመቆለፊያ እና የመክፈቻ ደንብ (Security Mode)</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <button
                type="button"
                onClick={() => handleToggleSecurityMode('one_time_activation')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  config.securityMode === 'one_time_activation'
                    ? 'bg-amber-950/40 border-amber-500 text-amber-100'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-stone-200">የአንድ ጊዜ ማግበሪያ (One-time)</span>
                  {config.securityMode === 'one_time_activation' && (
                    <Check className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">
                  አንድ ስልክ ወይም ኮምፒውተር አንዴ በይለፍ ቃል ከነቃ በኋላ ዳግም አይጠይቅም።
                </p>
              </button>

              <button
                type="button"
                onClick={() => handleToggleSecurityMode('always_ask')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  config.securityMode === 'always_ask'
                    ? 'bg-amber-950/40 border-amber-500 text-amber-100'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-stone-200">በእያንዳንዱ መክፈቻ ይጠይቅ (Always Lock)</span>
                  {config.securityMode === 'always_ask' && (
                    <Check className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">
                  መተግበሪያው በየተዘጋና በየተከፈተ ቁጥር ለደኅንነት ሲባል የይለፍ ቃል ይጠይቃል።
                </p>
              </button>
            </div>
          </div>

          {/* Section 3: Generate and Manage User Keys */}
          <div className="bg-stone-950/60 border border-stone-800 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>ለተጠቃሚዎች የተሰጡ የፈቃድ ቁልፎች ({config.authorizedKeys.length})</span>
              </h4>
            </div>
            <p className="text-xs text-stone-400 mb-4">
              ለጓደኛ፣ ለቤተሰብ ወይም ለተጠቃሚዎች የተለየ ቁልፍ ያመንጩ እና በቴሌግራም/ዋትስአፕ ይላኩላቸው።
            </p>

            {/* Create New Key Sub-form */}
            <form onSubmit={handleAddUserKey} className="p-3 bg-stone-900 border border-stone-800 rounded-xl mb-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 mb-1">የተጠቃሚው ስም</label>
                  <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="ምሳሌ፡ ወንድም ሰለሞን"
                    className="w-full px-3 py-1.5 bg-stone-950 border border-stone-700 rounded-lg text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 mb-1 flex items-center justify-between">
                    <span>የማግበሪያ ቁልፍ</span>
                    <button
                      type="button"
                      onClick={() => setNewKeyCode(generateActivationCode())}
                      className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" /> አዲስ ቁጥር
                    </button>
                  </label>
                  <input
                    type="text"
                    value={newKeyCode}
                    onChange={(e) => setNewKeyCode(e.target.value.toUpperCase())}
                    className="w-full px-3 py-1.5 bg-stone-950 border border-stone-700 rounded-lg text-xs font-mono font-bold text-amber-300 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newKeyNote}
                  onChange={(e) => setNewKeyNote(e.target.value)}
                  placeholder="ማስታወሻ (አማራጭ፡ ለምሳሌ የሰንበት ት/ቤት ተማሪ...)"
                  className="flex-1 px-3 py-1.5 bg-stone-950 border border-stone-700 rounded-lg text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  disabled={!newUserName.trim() || !newKeyCode.trim()}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ፈቃድ ስጥ</span>
                </button>
              </div>
            </form>

            {/* List of Keys */}
            <div className="space-y-2">
              {config.authorizedKeys.length === 0 ? (
                <div className="text-center py-4 text-xs text-stone-500">
                  እስካሁን የተፈጠረ ተጨማሪ ቁልፍ የለም። በማስተር የይለፍ ቃል መግባት ይችላሉ።
                </div>
              ) : (
                config.authorizedKeys.map((key) => (
                  <div
                    key={key.id}
                    className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors ${
                      key.isActive
                        ? 'bg-stone-900 border-stone-800'
                        : 'bg-stone-950/80 border-stone-900 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-stone-100">{key.assignedTo}</span>
                        <span className="px-2 py-0.5 bg-stone-950 border border-stone-700 text-amber-300 font-mono text-xs font-bold rounded">
                          {key.code}
                        </span>
                        {!key.isActive && (
                          <span className="px-1.5 py-0.5 bg-rose-950/70 border border-rose-800 text-rose-300 text-[10px] rounded">
                            ታግዷል
                          </span>
                        )}
                      </div>
                      {key.note && (
                        <p className="text-[11px] text-stone-400 mt-0.5">{key.note}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 self-end sm:self-auto">
                      {/* Copy Share Invitation Button */}
                      <button
                        type="button"
                        onClick={() => handleCopyShareMessage(key)}
                        className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                          copiedKeyId === key.id
                            ? 'bg-emerald-800 text-emerald-100'
                            : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700'
                        }`}
                        title="የመክፈቻውን መልእክት ኮፒ አድርግ"
                      >
                        {copiedKeyId === key.id ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>ኮፒ ተደረገ!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3 h-3" />
                            <span>ኮፒ / ላክ</span>
                          </>
                        )}
                      </button>

                      {/* Active/Inactive Toggle */}
                      <button
                        type="button"
                        onClick={() => handleToggleKeyActive(key.id)}
                        className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                          key.isActive
                            ? 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                            : 'bg-amber-950 hover:bg-amber-900 text-amber-300'
                        }`}
                        title={key.isActive ? 'ፈቃዱን አግድ' : 'ፈቃዱን አንቃ'}
                      >
                        {key.isActive ? 'አግድ' : 'አንቃ'}
                      </button>

                      {/* Delete key */}
                      <button
                        type="button"
                        onClick={() => handleDeleteKey(key.id)}
                        className="p-1 rounded text-stone-400 hover:text-rose-400 hover:bg-stone-800 transition-colors cursor-pointer"
                        title="አስወግድ"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Section 4: Device Lock & Reset Actions */}
          <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>መሣሪያውን ወዲያውኑ ቆልፍ (Instant Lock)</span>
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                ይህንን ስልክ/ኮምፒውተር አሁን መቆለፍ ወይም ሁሉንም ማግበሪያዎች ዳግም ማስጀመር ይችላሉ።
              </p>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleLockThisDevice}
                className="flex-1 sm:flex-initial px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg border border-stone-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>ይህንን ቆልፍ</span>
              </button>

              <button
                type="button"
                onClick={handleRevokeAndRelockAll}
                className="flex-1 sm:flex-initial px-3 py-2 bg-rose-900/80 hover:bg-rose-800 text-rose-100 text-xs font-semibold rounded-lg border border-rose-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>ዳግም ቆልፍ (Reset)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-stone-800 bg-stone-950/70 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
            <Smartphone className="w-3.5 h-3.5 text-stone-400" />
            <span>የዚህ መሣሪያ ID: <code className="font-mono text-stone-300">{config.deviceId}</code></span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            ዝጋ
          </button>
        </div>

      </div>
    </div>
  );
};
