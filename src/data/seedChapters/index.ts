import { BibleVerse } from '../../types';
import { PSALMS_SEED } from './psalms';
import { EPISTLES_SEED } from './epistles';
import { PROPHETS_SEED } from './prophets';

export const SEED_CHAPTERS: Record<string, BibleVerse[]> = {
  ...PSALMS_SEED,
  ...EPISTLES_SEED,
  ...PROPHETS_SEED,
};
