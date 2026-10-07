export interface AuthorizedUserKey {
  id: string;
  code: string;
  assignedTo: string;
  createdAt: number;
  note?: string;
  isActive: boolean;
}

export interface SecurityConfig {
  isActivated: boolean;
  masterPasscode: string;
  securityMode: 'one_time_activation' | 'always_ask';
  authorizedKeys: AuthorizedUserKey[];
  deviceId: string;
  lastUnlockedAt: number;
}

const STORAGE_KEY = 'kal_bible_security_config';
const DEFAULT_MASTER_PASSCODE = 'KAL2026';

function generateDeviceId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'DEV-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getSecurityConfig(): SecurityConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        isActivated: !!parsed.isActivated,
        masterPasscode: parsed.masterPasscode || DEFAULT_MASTER_PASSCODE,
        securityMode: parsed.securityMode || 'one_time_activation',
        authorizedKeys: Array.isArray(parsed.authorizedKeys) ? parsed.authorizedKeys : [],
        deviceId: parsed.deviceId || generateDeviceId(),
        lastUnlockedAt: parsed.lastUnlockedAt || 0,
      };
    }
  } catch (e) {
    console.error('Failed to parse security config:', e);
  }

  // Initial default config for a new device
  const initialConfig: SecurityConfig = {
    isActivated: false,
    masterPasscode: DEFAULT_MASTER_PASSCODE,
    securityMode: 'one_time_activation',
    authorizedKeys: [
      {
        id: 'default_guest_1',
        code: 'KAL-777',
        assignedTo: 'የመጀመሪያ ፈቃድ (Default Key)',
        createdAt: Date.now(),
        note: 'ለቤተሰብ ወይም ለጓደኛ የተሰጠ ቁልፍ',
        isActive: true,
      }
    ],
    deviceId: generateDeviceId(),
    lastUnlockedAt: 0,
  };
  saveSecurityConfig(initialConfig);
  return initialConfig;
}

export function saveSecurityConfig(config: SecurityConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save security config:', e);
  }
}

/**
 * Checks if the current session / device is currently unlocked and allowed to read the Bible.
 */
export function checkIsUnlocked(): boolean {
  const config = getSecurityConfig();
  if (!config.isActivated) {
    return false;
  }
  if (config.securityMode === 'always_ask') {
    // If always_ask mode is enabled, check if unlocked in current session memory
    const sessionUnlocked = sessionStorage.getItem('kal_session_unlocked') === 'true';
    return sessionUnlocked;
  }
  return true;
}

/**
 * Validates a user passcode or activation key.
 * Returns { valid: boolean, role: 'master' | 'user' | null, message: string }
 */
export function verifyPasscode(input: string): { valid: boolean; isMaster: boolean; keyInfo?: AuthorizedUserKey; message: string } {
  const cleanInput = input.trim();
  if (!cleanInput) {
    return { valid: false, isMaster: false, message: 'እባክዎ የይለፍ ቃል ወይም የማግበሪያ ቁልፍ ያስገቡ' };
  }

  const config = getSecurityConfig();

  // 1. Check Master Admin Passcode (case-insensitive for convenience or exact)
  if (cleanInput.toUpperCase() === config.masterPasscode.toUpperCase() || cleanInput === config.masterPasscode) {
    return { valid: true, isMaster: true, message: 'የባለቤት/የአድሚን ፈቃድ በትክክል ተረጋግጧል!' };
  }

  // 2. Check Authorized Keys
  const matchedKey = config.authorizedKeys.find(
    (k) => k.isActive && (k.code.toUpperCase() === cleanInput.toUpperCase() || k.code === cleanInput)
  );

  if (matchedKey) {
    return { 
      valid: true, 
      isMaster: false, 
      keyInfo: matchedKey, 
      message: `እንኳን ደህና መጡ! ለ${matchedKey.assignedTo} የተሰጠ ፈቃድ ተረጋግጧል።` 
    };
  }

  return { valid: false, isMaster: false, message: 'የተሳሳተ የይለፍ ቃል ወይም ቁልፍ ነው! እባክዎ ከመተግበሪያው ባለቤት ትክክለኛውን ፈቃድ ያግኙ።' };
}

/**
 * Activates and unlocks the device upon valid code entry.
 */
export function unlockAndActivate(inputCode: string): { success: boolean; isMaster: boolean; message: string } {
  const result = verifyPasscode(inputCode);
  if (!result.valid) {
    return { success: false, isMaster: false, message: result.message };
  }

  const config = getSecurityConfig();
  config.isActivated = true;
  config.lastUnlockedAt = Date.now();
  saveSecurityConfig(config);

  sessionStorage.setItem('kal_session_unlocked', 'true');
  sessionStorage.setItem('kal_session_is_master', result.isMaster ? 'true' : 'false');

  return { success: true, isMaster: result.isMaster, message: result.message };
}

/**
 * Locks the current device immediately
 */
export function lockCurrentDevice(revokeActivation = false): void {
  sessionStorage.removeItem('kal_session_unlocked');
  sessionStorage.removeItem('kal_session_is_master');
  
  if (revokeActivation) {
    const config = getSecurityConfig();
    config.isActivated = false;
    saveSecurityConfig(config);
  }
}

/**
 * Generates a random friendly activation key like KAL-8492
 */
export function generateActivationCode(prefix = 'KAL'): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix.toUpperCase()}-${randomNum}`;
}
