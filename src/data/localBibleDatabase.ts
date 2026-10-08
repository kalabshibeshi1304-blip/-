import { BibleVerse, BibleBook } from '../types';
import { PENTATEUCH_SEED } from './seedChapters/pentateuch';
import { GOSPELS_SEED } from './seedChapters/gospels';
import { EPISTLES_SEED } from './seedChapters/epistles';
import { PSALMS_SEED } from './seedChapters/psalms';
import { PROPHETS_SEED } from './seedChapters/prophets';
import { WISDOM_SEED } from './seedChapters/wisdom';
import { REVELATION_SEED } from './seedChapters/revelation';

/**
 * Local Authentic Bible Database (100% Offline, Zero-Latency JSON Repository)
 * Contains authentic 1962 EC Amharic Bible text, English ESV translation,
 * Original Hebrew/Greek text, and Strong's Concordance terms.
 */
export const LOCAL_BIBLE_DATA: Record<string, BibleVerse[]> = {
  ...PENTATEUCH_SEED,
  ...WISDOM_SEED,
  ...PSALMS_SEED,
  ...PROPHETS_SEED,
  ...GOSPELS_SEED,
  ...EPISTLES_SEED,
  ...REVELATION_SEED,

  // ኦሪት ዘፍጥረት ምዕራፍ 2 (Genesis 2 - The Sabbath & Garden of Eden)
  'GEN_2': [
    {
      verse: 1,
      textAm: 'ሰማይና ምድር ሠራዊታቸውም ሁሉ ተፈጸሙ።',
      textEn: 'Thus the heavens and the earth were finished, and all the host of them.',
      textOriginal: 'וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל־צְבָאָם׃',
      transliteration: "Vaykhullu hashamayim v'ha'aretz v'khol-tsva'am.",
      strongsWords: [
        { strongsNumber: 'H3615', wordOriginal: 'וַיְכֻלּוּ', transliteration: 'vaykhullu', lemma: 'כָּלָה', partOfSpeech: 'verb pual imperfect', definition: 'were completed, finished', amharicMeaning: 'ተፈጸሙ / ተጠናቀቁ' }
      ]
    },
    {
      verse: 2,
      textAm: 'እግዚአብሔርም የሠራውን ሥራ በሰባተኛው ቀን ፈጸመ፤ በሰባተኛውም ቀን ከሠራው ሥራ ሁሉ ዐረፈ።',
      textEn: 'And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done.',
      textOriginal: 'וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי...',
      transliteration: "Vaykhal Elohim bayyom hashvi'i m'lakhto asher asah vayyishbot...",
      strongsWords: [
        { strongsNumber: 'H7673', wordOriginal: 'וַיִּשְׁבֹּת', transliteration: 'vayyishbot', lemma: 'שָׁבַת', partOfSpeech: 'verb qal imperfect', definition: 'rested, ceased from work', amharicMeaning: 'ዐረፈ / ሥራውን አቆመ' }
      ]
    },
    {
      verse: 3,
      textAm: 'እግዚአብሔርም ሰባተኛውን ቀን ባረከው ቀደሰውም፤ እግዚአብሔር ሊያደርገው ከፈጠረው ሥራ ሁሉ በእርሱ ዐርፎአልና።',
      textEn: 'So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation.',
      textOriginal: 'וַיְבָרֶךְ אֱלֹהִים אֶת־יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ כִּי בוֹ שָׁבַת...',
      transliteration: "Vayvarekh Elohim et-yom hashvi'i vaykaddesh oto...",
      strongsWords: [
        { strongsNumber: 'H6942', wordOriginal: 'וַיְקַדֵּשׁ', transliteration: 'vaykaddesh', lemma: 'קָדַשׁ', partOfSpeech: 'verb piel imperfect', definition: 'consecrated, set apart as sacred', amharicMeaning: 'ቀደሰው / ለይቶ አከበረው' }
      ]
    },
    {
      verse: 7,
      textAm: 'እግዚአብሔር አምላክም ሰውን ከምድር አፈር አበጀው፤ በአፍንጫውም የሕይወት እስትንፋስን እፍ አለበት፤ ሰውም ሕያው ነፍስ ያለው ሆነ።',
      textEn: 'then the LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature.',
      textOriginal: 'וַיִּיצֶר יְהוָה אֱלֹהִים אֶת־הָאָדָם עָפָר מִן־הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה׃',
      transliteration: "Vayyitser Adonai Elohim et-ha'adam afar min-ha'adamah vayyipach b'appav nishmat chayyim...",
      strongsWords: [
        { strongsNumber: 'H5301', wordOriginal: 'נִשְׁמַת', transliteration: 'nishmat', lemma: 'נְשָׁמָה', partOfSpeech: 'noun feminine construct', definition: 'breath, vital spirit of God', amharicMeaning: 'የሕይወት እስትንፋስ' },
        { strongsNumber: 'H5315', wordOriginal: 'לְנֶפֶשׁ', transliteration: "l'nefesh", lemma: 'נֶפֶשׁ', partOfSpeech: 'noun feminine singular', definition: 'living being, soul, person', amharicMeaning: 'ሕያው ነፍስ' }
      ]
    },
    {
      verse: 8,
      textAm: 'እግዚአብሔር አምላክም በምሥራቅ በዔድን ገነትን ተከለ፥ የፈጠረውንም ሰው ከዚያው አኖረው።',
      textEn: 'And the LORD God planted a garden in Eden, in the east, and there he put the man whom he had formed.',
      textOriginal: 'וַיִּטַּע יְהוָה אֱלֹהִים גַּן־בְּעֵדֶן מִקֶּדֶם וַיָּשֶׂם שָׁם אֶת־הָאָדָם אֲשֶׁר יָצָר׃',
      transliteration: "Vayyitta Adonai Elohim gan-b'Eden mikedem..."
    },
    {
      verse: 9,
      textAm: 'እግዚአብሔር አምላክም ለማየት ደስ የሚያሰኘውን፥ ለመብላትም መልካም የሆነውን ዛፍ ሁሉ ከምድር አበቀለ፤ በገነትም መካከል የሕይወትን ዛፍ፥ መልካምና ክፉን የሚያስታውቀውንም ዛፍ አበቀለ።',
      textEn: 'And out of the ground the LORD God made to spring up every tree that is pleasant to the sight and good for food. The tree of life was in the midst of the garden, and the tree of the knowledge of good and evil.',
      textOriginal: 'וַיַּצְמַח יְהוָה אֱלֹהִים מִן־הָאֲדָמָה כָּל־עֵץ נֶחְמָד לְמַרְאֶה וְטוֹב לְמַאֲכָל...',
      transliteration: "Vayatsmach Adonai Elohim..."
    },
    {
      verse: 15,
      textAm: 'እግዚአብሔር አምላክም ሰውን ወስዶ ያበጃትና ይጠብቃት ዘንድ በዔድን ገነት አኖረው።',
      textEn: 'The LORD God took the man and put him in the garden of Eden to work it and keep it.',
      textOriginal: 'וַיִּקַּח יְהוָה אֱלֹהִים אֶת־הָאָדָם וַיַּנִּחֵהוּ בְגַן־עֵדֶן לְעָבְדָהּ וּלְשָׁמְרָהּ׃',
      transliteration: "Vayyikkach Adonai Elohim et-ha'adam..."
    },
    {
      verse: 18,
      textAm: 'እግዚአብሔር አምላክም አለ፦ «ሰው ብቻውን ይሆን ዘንድ መልካም አይደለም፤ የሚመቸውን ረዳት እሠራለታለሁ።»',
      textEn: 'Then the LORD God said, "It is not good that the man should be alone; I will make him a helper fit for him."',
      textOriginal: 'וַיֹּאמֶר יְהוָה אֱלֹהִים לֹא־טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ אֶעֱשֶׂהּ־לּוֹ עֵזֶר כְּנֶגְדּוֹ׃',
      transliteration: "Vayyomer Adonai Elohim lo-tov heyot ha'adam l'vaddo e'eseh-lo ezer k'negdo.",
      strongsWords: [
        { strongsNumber: 'H5828', wordOriginal: 'עֵזֶר', transliteration: 'ezer', lemma: 'עֵזֶר', partOfSpeech: 'noun masculine singular', definition: 'helper, supporting counterpart', amharicMeaning: 'ረዳት / አጋዥ' }
      ]
    },
    {
      verse: 24,
      textAm: 'ስለዚህ ሰው አባቱንና እናቱን ይተዋል፥ በሚስቱም ይጣበቃል፤ ሁለቱም አንድ ሥጋ ይሆናሉ።',
      textEn: 'Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.',
      textOriginal: 'עַל־כֵּן יַעֲזָב־אִישׁ אֶת־אָבִיו וְאֶת־אִמּוֹ וְדָבַק בְּאִשְׁתּוֹ וְהָיוּ לְבָשָׂר אֶחָד׃',
      transliteration: "Al-ken ya'azov-ish et-aviv v'et-immo v'davak b'ishto v'hayu l'vasar echad.",
      strongsWords: [
        { strongsNumber: 'H1692', wordOriginal: 'וְדָבַק', transliteration: "v'davak", lemma: 'דָּבַק', partOfSpeech: 'verb qal perfect', definition: 'cling, unite faithfully', amharicMeaning: 'ይጣበቃል / ይተሳሰራል' }
      ]
    }
  ],

  // ኦሪት ዘፍጥረት ምዕራፍ 3 (Genesis 3 - The Fall & Protoevangelium Promise)
  'GEN_3': [
    {
      verse: 1,
      textAm: 'እባብም እግዚአብሔር አምላክ ከፈጠረው ከምድር አውሬ ሁሉ ይልቅ ተንኰለኛ ነበረ። ሴቲቱንም፦ «በውኑ እግዚአብሔር ከገነት ዛፍ ሁሉ እንዳትበሉ አዝዞአልን?» አላት።',
      textEn: 'Now the serpent was more crafty than any other beast of the field that the LORD God had made. He said to the woman, "Did God actually say, You shall not eat of any tree in the garden?"',
      textOriginal: 'וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה אֲשֶׁר עָשָׂה יְהוָה אֱלֹהִים...',
      transliteration: "V'hannachash hayah arum mikol chayyat hasadeh..."
    },
    {
      verse: 6,
      textAm: 'ሴቲቱም ዛፉ ለመብላት ያማረ፥ ለዓይንም ደስ የሚያሰኝ፥ ለዕውቀትም መልካም እንደ ሆነ አየች፤ ከፍሬውም ወሰደችና በላች፥ ለባልዋም ደግሞ ሰጠችው እርሱም ከእርስዋ ጋር በላ።',
      textEn: 'So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate, and she also gave some to her husband who was with her, and he ate.',
      textOriginal: 'וַתֵּרֶא הָאִשָּׁה כִּי טוֹב הָעֵץ לְמַאֲכָל וְכִי תַאֲוָה־הוּא לָעֵינַיִם...',
      transliteration: "Vattere ha'ishah ki tov ha'ets..."
    },
    {
      verse: 9,
      textAm: 'እግዚአብሔር አምላክም አዳምን ጠርቶ፦ «ወዴት ነህ?» አለው።',
      textEn: 'But the LORD God called to the man and said to him, "Where are you?"',
      textOriginal: 'וַיִּקְרָא יְהוָה אֱלֹהִים אֶל־הָאָדָם וַיֹּאמֶר לוֹ אַיֶּכָּה׃',
      transliteration: "Vayyikra Adonai Elohim el-ha'adam vayyomer lo ayyeka.",
      strongsWords: [
        { strongsNumber: 'H335', wordOriginal: 'אַיֶּכָּה', transliteration: 'ayyeka', lemma: 'אַי', partOfSpeech: 'interrogative adverb suffix', definition: 'where are you? (gracious call of God)', amharicMeaning: 'ወዴት ነህ?' }
      ]
    },
    {
      verse: 15,
      textAm: '«በአንተና በሴቲቱ መካከል፥ በዘርህና በዘርዋም መካከል ጠላትነትን አደርጋለሁ፤ እርሱ ራስህን ይቀጠቅጣል፥ አንተም ሰኮናውን ትቀጠቅጣለህ።»',
      textEn: '"I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel."',
      textOriginal: 'וְאֵיבָה אָשִׁית בֵּינְךָ וּבֵין הָאִשָּׁה וּבֵין זַרְעֲךָ וּבֵין זַרְעָהּ הוּא יְשׁוּפְךָ רֹאשׁ וְאַתָּה תְּשׁוּפֶנּוּ עָקֵב׃',
      transliteration: "V'eivah ashit beinkha uvein ha'ishah uvein zar'akha uvein zar'ah hu y'shufkha rosh v'attah t'shufennu ekev.",
      strongsWords: [
        { strongsNumber: 'H2233', wordOriginal: 'זַרְעָהּ', transliteration: "zar'ah", lemma: 'זֶרַע', partOfSpeech: 'noun masculine singular suffix', definition: 'offspring, seed of the woman (Messianic Prophecy)', amharicMeaning: 'የሴቲቱ ዘር (ክርስቶስ)' },
        { strongsNumber: 'H7779', wordOriginal: 'יְשׁוּפְךָ', transliteration: "y'shufkha", lemma: 'שׁוּף', partOfSpeech: 'verb qal imperfect', definition: 'shall crush, bruise totally', amharicMeaning: 'ራስህን ይቀጠቅጣል' }
      ]
    }
  ]
};

/**
 * Direct fast accessor for Local Bible Database
 */
export function getLocalChapterVerses(bookId: string, chapter: number): BibleVerse[] | null {
  const key = `${bookId.toUpperCase()}_${chapter}`;
  const verses = LOCAL_BIBLE_DATA[key];
  if (verses && verses.length > 0) {
    return [...verses].sort((a, b) => a.verse - b.verse);
  }
  return null;
}
