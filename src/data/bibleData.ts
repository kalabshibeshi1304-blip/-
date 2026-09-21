import { BibleBook, BibleVerse } from '../types';
import { SEED_CHAPTERS } from './seedChapters/index';
import { getExpectedVerseCount } from './bibleVerseCounts';

export { SEED_CHAPTERS };

export const PROTESTANT_BOOKS: BibleBook[] = [
  // ===================== ብሉይ ኪዳን (OLD TESTAMENT - 39 BOOKS - HEBREW / עברית) =====================
  // የሕግ መጻሕፍት (Pentateuch / Torah)
  { id: 'GEN', order: 1, nameAm: 'ኦሪት ዘፍጥረት', nameEn: 'Genesis', nameOriginal: 'בְּרֵאשִׁית', transliteration: "B'reshit", abbrAm: 'ዘፍ', abbrEn: 'Gen', testament: 'OT', category: 'ሕግ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 50 },
  { id: 'EXO', order: 2, nameAm: 'ኦሪት ዘጸአት', nameEn: 'Exodus', nameOriginal: 'שְׁמוֹת', transliteration: 'Shemot', abbrAm: 'ዘጸ', abbrEn: 'Exo', testament: 'OT', category: 'ሕግ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 40 },
  { id: 'LEV', order: 3, nameAm: 'ኦሪት ዘሌዋውያን', nameEn: 'Leviticus', nameOriginal: 'וַיִּקְרָא', transliteration: 'Vayikra', abbrAm: 'ዘሌ', abbrEn: 'Lev', testament: 'OT', category: 'ሕግ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 27 },
  { id: 'NUM', order: 4, nameAm: 'ኦሪት ዘኍልቍ', nameEn: 'Numbers', nameOriginal: 'בְּמִדְבַּר', transliteration: 'Bamidbar', abbrAm: 'ዘኍ', abbrEn: 'Num', testament: 'OT', category: 'ሕግ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 36 },
  { id: 'DEU', order: 5, nameAm: 'ኦሪት ዘዳግም', nameEn: 'Deuteronomy', nameOriginal: 'דְּבָרִים', transliteration: 'Devarim', abbrAm: 'ዘዳ', abbrEn: 'Deu', testament: 'OT', category: 'ሕግ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 34 },

  // የታሪክ መጻሕፍት (Historical Books)
  { id: 'JOS', order: 6, nameAm: 'መጽሐፈ ኢያሱ', nameEn: 'Joshua', nameOriginal: 'יְהוֹשֻׁעַ', transliteration: 'Yehoshua', abbrAm: 'ኢያ', abbrEn: 'Jos', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 24 },
  { id: 'JDG', order: 7, nameAm: 'መጽሐፈ መሳፍንት', nameEn: 'Judges', nameOriginal: 'שׁוֹפְטִים', transliteration: 'Shoftim', abbrAm: 'መሳ', abbrEn: 'Jdg', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 21 },
  { id: 'RUT', order: 8, nameAm: 'መጽሐፈ ሩት', nameEn: 'Ruth', nameOriginal: 'רוּת', transliteration: 'Rut', abbrAm: 'ሩት', abbrEn: 'Rut', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 4 },
  { id: '1SA', order: 9, nameAm: 'መጽሐፈ ሳሙኤል ቀዳማዊ', nameEn: '1 Samuel', nameOriginal: 'שְׁמוּאֵל א׳', transliteration: 'Shemuel Aleph', abbrAm: '1ሳሙ', abbrEn: '1Sa', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 31 },
  { id: '2SA', order: 10, nameAm: 'መጽሐፈ ሳሙኤል ካልዕ', nameEn: '2 Samuel', nameOriginal: 'שְׁמוּאֵל ב׳', transliteration: 'Shemuel Bet', abbrAm: '2ሳሙ', abbrEn: '2Sa', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 24 },
  { id: '1KI', order: 11, nameAm: 'መጽሐፈ ነገሥት ቀዳማዊ', nameEn: '1 Kings', nameOriginal: 'מְלָכִים א׳', transliteration: 'Melakhim Aleph', abbrAm: '1ነገ', abbrEn: '1Ki', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 22 },
  { id: '2KI', order: 12, nameAm: 'መጽሐፈ ነገሥት ካልዕ', nameEn: '2 Kings', nameOriginal: 'מְלָכִים ב׳', transliteration: 'Melakhim Bet', abbrAm: '2ነገ', abbrEn: '2Ki', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 25 },
  { id: '1CH', order: 13, nameAm: 'መጽሐፈ ዜና መዋዕል ቀዳማዊ', nameEn: '1 Chronicles', nameOriginal: 'דִּבְרֵי הַיָּמִים א׳', transliteration: 'Divrei HaYamim Aleph', abbrAm: '1ዜና', abbrEn: '1Ch', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 29 },
  { id: '2CH', order: 14, nameAm: 'መጽሐፈ ዜና መዋዕል ካልዕ', nameEn: '2 Chronicles', nameOriginal: 'דִּבְרֵי הַיָּמִים ב׳', transliteration: 'Divrei HaYamim Bet', abbrAm: '2ዜና', abbrEn: '2Ch', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 36 },
  { id: 'EZR', order: 15, nameAm: 'መጽሐፈ ዕዝራ', nameEn: 'Ezra', nameOriginal: 'עֶזְרָא', transliteration: 'Ezra', abbrAm: 'ዕዝ', abbrEn: 'Ezr', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 10 },
  { id: 'NEH', order: 16, nameAm: 'መጽሐፈ ነህምያ', nameEn: 'Nehemiah', nameOriginal: 'נְחֶמְיָה', transliteration: 'Nechemyah', abbrAm: 'ነህ', abbrEn: 'Neh', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 13 },
  { id: 'EST', order: 17, nameAm: 'መጽሐፈ አስቴር', nameEn: 'Esther', nameOriginal: 'אֶסְתֵּר', transliteration: 'Ester', abbrAm: 'አስ', abbrEn: 'Est', testament: 'OT', category: 'ታሪክ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 10 },

  // የቅኔና ጥበብ መጻሕፍት (Wisdom & Poetry)
  { id: 'JOB', order: 18, nameAm: 'መጽሐፈ ኢዮብ', nameEn: 'Job', nameOriginal: 'אִיּוֹב', transliteration: 'Iyyov', abbrAm: 'ኢዮ', abbrEn: 'Job', testament: 'OT', category: 'ጥበብና ቅኔ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 42 },
  { id: 'PSA', order: 19, nameAm: 'መዝሙረ ዳዊት', nameEn: 'Psalms', nameOriginal: 'תְּהִלִּים', transliteration: 'Tehillim', abbrAm: 'መዝ', abbrEn: 'Psa', testament: 'OT', category: 'ጥበብና ቅኔ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 150 },
  { id: 'PRO', order: 20, nameAm: 'መጽሐፈ ምሳሌ', nameEn: 'Proverbs', nameOriginal: 'מִשְׁלֵי', transliteration: 'Mishlei', abbrAm: 'ምሳ', abbrEn: 'Pro', testament: 'OT', category: 'ጥበብና ቅኔ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 31 },
  { id: 'ECC', order: 21, nameAm: 'መጽሐፈ መክብብ', nameEn: 'Ecclesiastes', nameOriginal: 'קֹהֶלֶת', transliteration: 'Kohelet', abbrAm: 'መክ', abbrEn: 'Ecc', testament: 'OT', category: 'ጥበብና ቅኔ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 12 },
  { id: 'SNG', order: 22, nameAm: 'ማሕልየ መሓልይ', nameEn: 'Song of Solomon', nameOriginal: 'שִׁיר הַשִּׁירִים', transliteration: 'Shir HaShirim', abbrAm: 'ማሕ', abbrEn: 'Sng', testament: 'OT', category: 'ጥበብና ቅኔ', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 8 },

  // አበይት ነቢያት (Major Prophets)
  { id: 'ISA', order: 23, nameAm: 'ትንቢተ ኢሳይያስ', nameEn: 'Isaiah', nameOriginal: 'יְשַׁעְיָהוּ', transliteration: 'Yeshayahu', abbrAm: 'ኢሳ', abbrEn: 'Isa', testament: 'OT', category: 'አበይት ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 66 },
  { id: 'JER', order: 24, nameAm: 'ትንቢተ ኤርምያስ', nameEn: 'Jeremiah', nameOriginal: 'יִרְמְיָהוּ', transliteration: 'Yirmeyahu', abbrAm: 'ኤር', abbrEn: 'Jer', testament: 'OT', category: 'አበይት ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 52 },
  { id: 'LAM', order: 25, nameAm: 'ሰቆቃወ ኤርምያስ', nameEn: 'Lamentations', nameOriginal: 'אֵיכָה', transliteration: 'Eikhah', abbrAm: 'ሰቆ', abbrEn: 'Lam', testament: 'OT', category: 'አበይት ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 5 },
  { id: 'EZK', order: 26, nameAm: 'ትንቢተ ሕዝቅኤል', nameEn: 'Ezekiel', nameOriginal: 'יְחֶזְקֵאל', transliteration: 'Yekhezkel', abbrAm: 'ሕዝ', abbrEn: 'Ezk', testament: 'OT', category: 'አበይት ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 48 },
  { id: 'DAN', order: 27, nameAm: 'ትንቢተ ዳንኤል', nameEn: 'Daniel', nameOriginal: 'דָּנִיֵּאל', transliteration: 'Daniyel', abbrAm: 'ዳን', abbrEn: 'Dan', testament: 'OT', category: 'አበይት ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ / አራማይስጥ', totalChapters: 12 },

  // ደቂቀ ነቢያት (Minor Prophets - 12 Books)
  { id: 'HOS', order: 28, nameAm: 'ትንቢተ ሆሴዕ', nameEn: 'Hosea', nameOriginal: 'הוֹשֵׁעַ', transliteration: 'Hoshea', abbrAm: 'ሆሴ', abbrEn: 'Hos', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 14 },
  { id: 'JOL', order: 29, nameAm: 'ትንቢተ ኢዩኤል', nameEn: 'Joel', nameOriginal: 'יוֹאֵל', transliteration: 'Yoel', abbrAm: 'ኢዩ', abbrEn: 'Jol', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 3 },
  { id: 'AMO', order: 30, nameAm: 'ትንቢተ አሞጽ', nameEn: 'Amos', nameOriginal: 'עָמוֹס', transliteration: 'Amos', abbrAm: 'አሞ', abbrEn: 'Amo', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 9 },
  { id: 'OBA', order: 31, nameAm: 'ትንቢተ አብድዩ', nameEn: 'Obadiah', nameOriginal: 'עֹבַדְיָה', transliteration: 'Ovadyah', abbrAm: 'አብ', abbrEn: 'Oba', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 1 },
  { id: 'JON', order: 32, nameAm: 'ትንቢተ ዮናስ', nameEn: 'Jonah', nameOriginal: 'יוֹנָה', transliteration: 'Yonah', abbrAm: 'ዮና', abbrEn: 'Jon', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 4 },
  { id: 'MIC', order: 33, nameAm: 'ትንቢተ ሚክያስ', nameEn: 'Micah', nameOriginal: 'מִיכָה', transliteration: 'Mikhah', abbrAm: 'ሚክ', abbrEn: 'Mic', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 7 },
  { id: 'NAH', order: 34, nameAm: 'ትንቢተ ናሆም', nameEn: 'Nahum', nameOriginal: 'נַחוּם', transliteration: 'Nakhum', abbrAm: 'ናሆ', abbrEn: 'Nah', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 3 },
  { id: 'HAB', order: 35, nameAm: 'ትንቢተ ዕንባቆም', nameEn: 'Habakkuk', nameOriginal: 'חֲבַקּוּק', transliteration: 'Chavakuk', abbrAm: 'ዕን', abbrEn: 'Hab', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 3 },
  { id: 'ZEP', order: 36, nameAm: 'ትንቢተ ሶፎንያስ', nameEn: 'Zephaniah', nameOriginal: 'צְפַנְיָה', transliteration: 'Tzefanyah', abbrAm: 'ሶፎ', abbrEn: 'Zep', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 3 },
  { id: 'HAG', order: 37, nameAm: 'ትንቢተ ሐጌ', nameEn: 'Haggai', nameOriginal: 'חַגַּי', transliteration: 'Chaggai', abbrAm: 'ሐጌ', abbrEn: 'Hag', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 2 },
  { id: 'ZEC', order: 38, nameAm: 'ትንቢተ ዘካርያስ', nameEn: 'Zechariah', nameOriginal: 'זְכַרְיָה', transliteration: 'Zekharyah', abbrAm: 'ዘካ', abbrEn: 'Zec', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 14 },
  { id: 'MAL', order: 39, nameAm: 'ትንቢተ ሚልክያስ', nameEn: 'Malachi', nameOriginal: 'מַלְאָכִי', transliteration: 'Malakhi', abbrAm: 'ሚል', abbrEn: 'Mal', testament: 'OT', category: 'ደቂቀ ነቢያት', originalLang: 'hebrew', originalLanguageName: 'ዕብራይስጥ (עברית / BHS)', totalChapters: 4 },

  // ===================== አዲስ ኪዳን (NEW TESTAMENT - 27 BOOKS - GREEK / Ἑλληνική) =====================
  // ወንጌላት (The Four Gospels)
  { id: 'MAT', order: 40, nameAm: 'የማቴዎስ ወንጌል', nameEn: 'Matthew', nameOriginal: 'Κατὰ Μαθθαῖον', transliteration: 'Kata Matthaion', abbrAm: 'ማቴ', abbrEn: 'Mat', testament: 'NT', category: 'ወንጌላት', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 28 },
  { id: 'MRK', order: 41, nameAm: 'የማርቆስ ወንጌል', nameEn: 'Mark', nameOriginal: 'Κατὰ Μᾶρκον', transliteration: 'Kata Markon', abbrAm: 'ማር', abbrEn: 'Mrk', testament: 'NT', category: 'ወንጌላት', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 16 },
  { id: 'LUK', order: 42, nameAm: 'የሉቃስ ወንጌል', nameEn: 'Luke', nameOriginal: 'Κατὰ Λουκᾶν', transliteration: 'Kata Loukan', abbrAm: 'ሉቃ', abbrEn: 'Luk', testament: 'NT', category: 'ወንጌላት', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 24 },
  { id: 'JHN', order: 43, nameAm: 'የዮሐንስ ወንጌል', nameEn: 'John', nameOriginal: 'Κατὰ Ἰωάννην', transliteration: 'Kata Ioannen', abbrAm: 'ዮሐ', abbrEn: 'Jhn', testament: 'NT', category: 'ወንጌላት', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 21 },

  // የታሪክ መጽሐፍ (Church History)
  { id: 'ACT', order: 44, nameAm: 'የሐዋርያት ሥራ', nameEn: 'Acts', nameOriginal: 'Πράξεις Ἀποστόλων', transliteration: 'Praxeis Apostolon', abbrAm: 'የሐዋ', abbrEn: 'Act', testament: 'NT', category: 'የሐዋርያት ሥራ', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 28 },

  // የጳውሎስ መልእክቶች (Pauline Epistles - 14 / 13+Hebrews)
  { id: 'ROM', order: 45, nameAm: 'ወደ ሮሜ ሰዎች', nameEn: 'Romans', nameOriginal: 'Πρὸς Ῥωμαίους', transliteration: 'Pros Romaious', abbrAm: 'ሮሜ', abbrEn: 'Rom', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 16 },
  { id: '1CO', order: 46, nameAm: '1ኛ ቆሮንቶስ', nameEn: '1 Corinthians', nameOriginal: 'Πρὸς Κορινθίους Α΄', transliteration: 'Pros Korinthious A', abbrAm: '1ቆሮ', abbrEn: '1Co', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 16 },
  { id: '2CO', order: 47, nameAm: '2ኛ ቆሮንቶስ', nameEn: '2 Corinthians', nameOriginal: 'Πρὸς Κορινθίους Β΄', transliteration: 'Pros Korinthious B', abbrAm: '2ቆሮ', abbrEn: '2Co', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 13 },
  { id: 'GAL', order: 48, nameAm: 'ወደ ገላትያ ሰዎች', nameEn: 'Galatians', nameOriginal: 'Πρὸς Γαλάτας', transliteration: 'Pros Galatas', abbrAm: 'ገላ', abbrEn: 'Gal', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 6 },
  { id: 'EPH', order: 49, nameAm: 'ወደ ኤፌሶን ሰዎች', nameEn: 'Ephesians', nameOriginal: 'Πρὸς Ἐφεσίους', transliteration: 'Pros Ephesious', abbrAm: 'ኤፌ', abbrEn: 'Eph', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 6 },
  { id: 'PHP', order: 50, nameAm: 'ወደ ፊልጵስዩስ ሰዎች', nameEn: 'Philippians', nameOriginal: 'Πρὸς Φιλιππησίους', transliteration: 'Pros Philippesious', abbrAm: 'ፊል', abbrEn: 'Php', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 4 },
  { id: 'COL', order: 51, nameAm: 'ወደ ቆላስይስ ሰዎች', nameEn: 'Colossians', nameOriginal: 'Πρὸς Κολοσσαεῖς', transliteration: 'Pros Kolossaeis', abbrAm: 'ቆላ', abbrEn: 'Col', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 4 },
  { id: '1TH', order: 52, nameAm: '1ኛ ተሰሎንቄ', nameEn: '1 Thessalonians', nameOriginal: 'Πρὸς Θεσσαλονικεῖς Α΄', transliteration: 'Pros Thessalonikeis A', abbrAm: '1ተሰ', abbrEn: '1Th', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 5 },
  { id: '2TH', order: 53, nameAm: '2ኛ ተሰሎንቄ', nameEn: '2 Thessalonians', nameOriginal: 'Πρὸς Θεσσαλονικεῖς Β΄', transliteration: 'Pros Thessalonikeis B', abbrAm: '2ተሰ', abbrEn: '2Th', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 3 },
  { id: '1TI', order: 54, nameAm: '1ኛ ጢሞቴዎስ', nameEn: '1 Timothy', nameOriginal: 'Πρὸς Τιμόθεον Α΄', transliteration: 'Pros Timotheon A', abbrAm: '1ጢሞ', abbrEn: '1Ti', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 6 },
  { id: '2TI', order: 55, nameAm: '2ኛ ጢሞቴዎስ', nameEn: '2 Timothy', nameOriginal: 'Πρὸς Τιμόθεον Β΄', transliteration: 'Pros Timotheon B', abbrAm: '2ጢሞ', abbrEn: '2Ti', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 4 },
  { id: 'TIT', order: 56, nameAm: 'ወደ ቲቶ', nameEn: 'Titus', nameOriginal: 'Πρὸς Τίτον', transliteration: 'Pros Titon', abbrAm: 'ቲቶ', abbrEn: 'Tit', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 3 },
  { id: 'PHM', order: 57, nameAm: 'ወደ ፊልሞና', nameEn: 'Philemon', nameOriginal: 'Πρὸς Φιλήμονα', transliteration: 'Pros Philemona', abbrAm: 'ፊልሞ', abbrEn: 'Phm', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 1 },
  { id: 'HEB', order: 58, nameAm: 'ወደ ዕብራውያን', nameEn: 'Hebrews', nameOriginal: 'Πρὸς Ἑβραίους', transliteration: 'Pros Hebraious', abbrAm: 'ዕብ', abbrEn: 'Heb', testament: 'NT', category: 'የጳውሎስ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 13 },

  // አጠቃላይ መልእክቶች (General / Catholic Epistles)
  { id: 'JAS', order: 59, nameAm: 'የያዕቆብ መልእክት', nameEn: 'James', nameOriginal: 'Ἰακώβου', transliteration: 'Iakobou', abbrAm: 'ያዕ', abbrEn: 'Jas', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 5 },
  { id: '1PE', order: 60, nameAm: '1ኛ የጴጥሮስ መልእክት', nameEn: '1 Peter', nameOriginal: 'Πέτρου Α΄', transliteration: 'Petrou A', abbrAm: '1ጴጥ', abbrEn: '1Pe', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 5 },
  { id: '2PE', order: 61, nameAm: '2ኛ የጴጥሮስ መልእክት', nameEn: '2 Peter', nameOriginal: 'Πέτρου Β΄', transliteration: 'Petrou B', abbrAm: '2ጴጥ', abbrEn: '2Pe', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 3 },
  { id: '1JN', order: 62, nameAm: '1ኛ የዮሐንስ መልእክት', nameEn: '1 John', nameOriginal: 'Ἰωάννου Α΄', transliteration: 'Ioannou A', abbrAm: '1ዮሐ', abbrEn: '1Jn', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 5 },
  { id: '2JN', order: 63, nameAm: '2ኛ የዮሐንስ መልእክት', nameEn: '2 John', nameOriginal: 'Ἰωάννου Β΄', transliteration: 'Ioannou B', abbrAm: '2ዮሐ', abbrEn: '2Jn', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 1 },
  { id: '3JN', order: 64, nameAm: '3ኛ የዮሐንስ መልእክት', nameEn: '3 John', nameOriginal: 'Ἰωάννου Γ΄', transliteration: 'Ioannou G', abbrAm: '3ዮሐ', abbrEn: '3Jn', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 1 },
  { id: 'JUD', order: 65, nameAm: 'የይሁዳ መልእክት', nameEn: 'Jude', nameOriginal: 'Ἰούδα', transliteration: 'Iouda', abbrAm: 'ይሁ', abbrEn: 'Jud', testament: 'NT', category: 'አጠቃላይ መልእክቶች', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 1 },

  // ትንቢት (Apocalypse / Prophecy)
  { id: 'REV', order: 66, nameAm: 'የዮሐንስ ራእይ', nameEn: 'Revelation', nameOriginal: 'Ἀποκάλυψις Ἰωάννου', transliteration: 'Apokalypsis Ioannou', abbrAm: 'ራእ', abbrEn: 'Rev', testament: 'NT', category: 'ትንቢት', originalLang: 'greek', originalLanguageName: 'ግሪክኛ (Ἑλληνική / NA28)', totalChapters: 22 },
];

export function getBookById(id: string): BibleBook | undefined {
  return PROTESTANT_BOOKS.find((b) => b.id.toUpperCase() === id.toUpperCase());
}

export function getBooksByTestament(testament: 'OT' | 'NT'): BibleBook[] {
  return PROTESTANT_BOOKS.filter((b) => b.testament === testament);
}

export function getCachedVerses(bookId: string, chapter: number): BibleVerse[] | null {
  const key = `${bookId.toUpperCase()}_${chapter}`;
  const verses = SEED_CHAPTERS[key];
  if (!verses || verses.length === 0) return null;
  
  // Verify that the verses form a complete chapter
  const expectedCount = getExpectedVerseCount(bookId, chapter);
  if (verses.length >= expectedCount) {
    return verses;
  }
  return null;
}
