import { BibleVerse } from '../../types';
import { PSALMS_SEED } from './psalms';
import { EPISTLES_SEED } from './epistles';
import { PROPHETS_SEED } from './prophets';
import { GOSPELS_SEED } from './gospels';
import { PENTATEUCH_SEED } from './pentateuch';
import { WISDOM_SEED } from './wisdom';
import { REVELATION_SEED } from './revelation';

export const SEED_CHAPTERS: Record<string, BibleVerse[]> = {
  ...PENTATEUCH_SEED,
  ...WISDOM_SEED,
  ...PSALMS_SEED,
  ...PROPHETS_SEED,
  ...GOSPELS_SEED,
  ...EPISTLES_SEED,
  ...REVELATION_SEED,
};
