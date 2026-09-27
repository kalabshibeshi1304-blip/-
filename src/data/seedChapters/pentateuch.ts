import { BibleVerse } from '../../types';

export const PENTATEUCH_SEED: Record<string, BibleVerse[]> = {
  // ኦሪት ዘፍጥረት ምዕራፍ 1 (Genesis 1 - Creation of the Universe)
  'GEN_1': [
    {
      verse: 1,
      textAm: 'በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።',
      textEn: 'In the beginning, God created the heavens and the earth.',
      textOriginal: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃',
      transliteration: "B'reshit bara Elohim et hashamayim v'et ha'aretz.",
      strongsWords: [
        { strongsNumber: 'H7225', wordOriginal: 'בְּרֵאשִׁית', transliteration: "b'reshit", lemma: 'רֵאשִׁית', partOfSpeech: 'noun feminine singular', definition: 'in the beginning, first time', amharicMeaning: 'በመጀመሪያ' },
        { strongsNumber: 'H1254', wordOriginal: 'בָּרָא', transliteration: 'bara', lemma: 'בָּרָא', partOfSpeech: 'verb qal perfect', definition: 'created out of nothing (ex nihilo)', amharicMeaning: 'ፈጠረ' },
        { strongsNumber: 'H430', wordOriginal: 'אֱלֹהִים', transliteration: 'Elohim', lemma: 'אֱלֹהִים', partOfSpeech: 'noun masculine plural', definition: 'God, Supreme Ruler, Triune Creator', amharicMeaning: 'እግዚአብሔር / አምላክ' }
      ]
    },
    {
      verse: 2,
      textAm: 'ምድርም ባዶ ነበረች፥ አንዳችም አልነበረባትም፤ ጨለማም በጥልቁ ላይ ነበረ፤ የእግዚአብሔርም መንፈስ በውኃ ላይ ሰፍፎ ነበር።',
      textEn: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      textOriginal: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם׃',
      transliteration: "V'ha'aretz haytah tohu vavohu v'choshekh al-pnei tehom v'ruach Elohim merachefet al-pnei hamayim.",
      strongsWords: [
        { strongsNumber: 'H7307', wordOriginal: 'רוּחַ', transliteration: 'ruach', lemma: 'רוּחַ', partOfSpeech: 'noun feminine singular', definition: 'Spirit, breath, wind of God', amharicMeaning: 'መንፈስ' }
      ]
    },
    {
      verse: 3,
      textAm: 'እግዚአብሔርም፦ «ብርሃን ይሁን» አለ፤ ብርሃንም ሆነ።',
      textEn: 'And God said, "Let there be light," and there was light.',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר׃',
      transliteration: "Vayyomer Elohim yehi or vayhi-or.",
      strongsWords: [
        { strongsNumber: 'H216', wordOriginal: 'אוֹר', transliteration: 'or', lemma: 'אוֹר', partOfSpeech: 'noun masculine singular', definition: 'light, illumination', amharicMeaning: 'ብርሃን' }
      ]
    },
    {
      verse: 26,
      textAm: 'እግዚአብሔርም አለ፦ «ሰውን በመልካችን እንደ ምሳሌአችን እንፍጠር፤ የባሕር ዓሦችንና የሰማይ ወፎችን፥ እንስሳትንና ምድርን ሁሉ፥ በምድር ላይ የሚንቀሳቀሱትንም ሁሉ ይግዙ።»',
      textEn: 'Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth."',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה וּבְכָל־הָאָרֶץ',
      transliteration: "Vayyomer Elohim na'aseh adam b'tsalmenu kidmutenu...",
      strongsWords: [
        { strongsNumber: 'H120', wordOriginal: 'אָדָם', transliteration: 'adam', lemma: 'אָדָם', partOfSpeech: 'noun masculine singular', definition: 'man, mankind, human', amharicMeaning: 'ሰው' },
        { strongsNumber: 'H6754', wordOriginal: 'בְּצַלְמֵנוּ', transliteration: "b'tsalmenu", lemma: 'צֶלֶם', partOfSpeech: 'noun masculine singular suffix', definition: 'in our image, reflection', amharicMeaning: 'በመልካችን' }
      ]
    },
    {
      verse: 27,
      textAm: 'እግዚአብሔርም ሰውን በመልኩ ፈጠረ፤ በእግዚአብሔር መልክ ፈጠረው፤ ወንድና ሴት አድርጎ ፈጠራቸው።',
      textEn: 'So God created man in his own image, in the image of God he created him; male and female he created them.',
      textOriginal: 'וַיִּבְרָא אֱלֹהִים אֶת־הָאָדָם בְּצַלְמוֹ בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ זָכָר וּנְקֵבָה בָּרָא אֹתָם׃',
      transliteration: "Vayyivra Elohim et-ha'adam b'tsalmo b'tselem Elohim bara oto zakhar unkevah bara otam."
    },
    {
      verse: 31,
      textAm: 'እግዚአብሔርም ያደረገውን ሁሉ አየ፥ እነሆም፥ እጅግ መልካም ነበረ። ማታም ሆነ ጥዋትም ሆነ፥ ስድስተኛ ቀን።',
      textEn: 'And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.',
      textOriginal: 'וַיַּרְא אֱלֹהִים אֶת־כָּל־אֲשֶׁר עָשָׂה וְהִנֵּה־טוֹב מְאֹד וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם הַשִּׁשִּׁי׃',
      transliteration: "Vayyar Elohim et-kol-asher asah v'hinneh-tov me'od..."
    }
  ],

  // ኦሪት ዘጸአት ምዕራፍ 20 (Exodus 20 - The Ten Commandments)
  'EXO_20': [
    {
      verse: 1,
      textAm: 'እግዚአብሔርም ይህን ቃል ሁሉ እንዲህ ብሎ ተናገረ፦',
      textEn: 'And God spoke all these words, saying,',
      textOriginal: 'וַיְדַבֵּר אֱלֹהִים אֵת כָּל־הַדְּבָרִים הָאֵלֶּה לֵאמֹר׃',
      transliteration: "Vaydaber Elohim et kol-hadvarim ha'elleh lemor."
    },
    {
      verse: 2,
      textAm: '«ከግብፅ ምድር ከባርነት ቤት ያወጣሁህ እግዚአብሔር አምላክህ እኔ ነኝ።',
      textEn: '"I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.',
      textOriginal: 'אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים׃',
      transliteration: "Anokhi Adonai Eloheikha asher hotsetikha me'eretz Mitzrayim mibeit avadim.",
      strongsWords: [
        { strongsNumber: 'H3068', wordOriginal: 'יְהוָה', transliteration: 'YHWH / Adonai', lemma: 'יהוה', partOfSpeech: 'proper name', definition: 'The LORD, the Eternal Covenant God', amharicMeaning: 'እግዚአብሔር' }
      ]
    },
    {
      verse: 3,
      textAm: 'ከእኔ በቀር ሌሎች አማልክት አይሁኑልህ።',
      textEn: '"You shall have no other gods before me.',
      textOriginal: 'לֹא יִהְיֶה־לְךָ אֱלֹהִים אֲחֵרִים עַל־פָּנָי׃',
      transliteration: "Lo yihyeh-l'kha elohim acherim al-panai."
    },
    {
      verse: 4,
      textAm: 'በላይ በሰማይ ካለው፥ በታችም በምድር ካለው፥ ከምድርም በታች በውኃ ካለው የማናቸውንም ምሳሌ፥ የተቀረጸውንም ምስል ለአንተ አታድርግ።',
      textEn: '"You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath...',
      textOriginal: 'לֹא תַעֲשֶׂה־לְךָ פֶסֶל וְכָל־תְּמוּנָה אֲשֶׁר בַּשָּׁמַיִם מִמַּעַל וַאֲשֶׁר בָּאָרֶץ מִתָּחַת...',
      transliteration: "Lo ta'aseh-l'kha pesel v'khol-tmunah..."
    },
    {
      verse: 7,
      textAm: 'የእግዚአብሔርን የአምላክህን ስም በከንቱ አትጥራ፤ እግዚአብሔር ስሙን በከንቱ የሚጠራውን ከበደል አያነጻውምና።',
      textEn: '"You shall not take the name of the LORD your God in vain, for the LORD will not hold him guiltless who takes his name in vain.',
      textOriginal: 'לֹא תִשָּׂא אֶת־שֵׁם־יְהוָה אֱלֹהֶיךָ לַשָּׁוְא כִּי לֹא יְנַקֶּה יְהוָה אֵת אֲשֶׁר־יִשָּׂא אֶת־שְׁמוֹ לַשָּׁוְא׃',
      transliteration: "Lo tisa et-shem-Adonai Eloheikha lashav..."
    },
    {
      verse: 8,
      textAm: 'የሰንበትን ቀን ትቀድሰው ዘንድ አስብ።',
      textEn: '"Remember the Sabbath day, to keep it holy.',
      textOriginal: 'זָכוֹר אֶת־יוֹם הַשַּׁבָּת לְקַדְּשׁוֹ׃',
      transliteration: "Zakhor et-yom hashabbat l'kadd'sho.",
      strongsWords: [
        { strongsNumber: 'H7676', wordOriginal: 'הַשַּׁבָּת', transliteration: 'hashabbat', lemma: 'שַׁבָּת', partOfSpeech: 'noun feminine singular', definition: 'Sabbath, day of holy rest', amharicMeaning: 'ሰንበት' }
      ]
    },
    {
      verse: 12,
      textAm: 'አባትህንና እናትህን አክብር፤ እግዚአብሔር አምላክህ በሚሰጥህ ምድር ዕድሜህ እንዲረዝም።',
      textEn: '"Honor your father and your mother, that your days may be long in the land that the LORD your God is giving you.',
      textOriginal: 'כַּבֵּד אֶת־אָבִיךָ וְאֶת־אִמֶּךָ לְמַעַן יַאֲרִכוּן יָמֶיךָ עַל הָאֲדָמָה אֲשֶׁר־יְהוָה אֱלֹהֶיךָ נֹתֵן לָךְ׃',
      transliteration: "Kabed et-avikha v'et-immekha l'ma'an ya'arikhun yameikha..."
    },
    {
      verse: 13,
      textAm: 'አትግደል።',
      textEn: '"You shall not murder.',
      textOriginal: 'לֹא תִרְצָח׃',
      transliteration: "Lo tirtsach."
    },
    {
      verse: 14,
      textAm: 'አታመንዝር።',
      textEn: '"You shall not commit adultery.',
      textOriginal: 'לֹא תִנְאָף׃',
      transliteration: "Lo tin'af."
    },
    {
      verse: 15,
      textAm: 'አትስረቅ።',
      textEn: '"You shall not steal.',
      textOriginal: 'לֹא תִגְנֹב׃',
      transliteration: "Lo tignov."
    },
    {
      verse: 16,
      textAm: 'በባልንጀራህ ላይ በሐሰት አትመስክር።',
      textEn: '"You shall not bear false witness against your neighbor.',
      textOriginal: 'לֹא־תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר׃',
      transliteration: "Lo-ta'aneh v're'akha ed shaker."
    },
    {
      verse: 17,
      textAm: 'የባልንጀራህን ቤት አትመኝ፤ የባልንጀራህን ሚስት ሎሌውንም ገረዱንም በሬውንም አህያውንም ከባልንጀራህ ገንዘብ ሁሉ ማናቸውንም አትመኝ።',
      textEn: '"You shall not covet your neighbor’s house; you shall not covet your neighbor’s wife, or his male servant, or his female servant, or his ox, or his donkey, or anything that is your neighbor’s."',
      textOriginal: 'לֹא תַחְמֹד בֵּית רֵעֶךָ לֹא־תַחְמֹד אֵשֶׁת רֵעֶךָ וְעַבְדּוֹ וַאֲמָתוֹ וְשׁוֹרוֹ וַחֲמֹרוֹ וְכֹל אֲשֶׁר לְרֵעֶךָ׃',
      transliteration: "Lo tachmod beit re'ekha..."
    }
  ],

  // ኦሪት ዘኍልቍ ምዕራፍ 6 (Numbers 6 - The Priestly Aaronic Blessing)
  'NUM_6': [
    {
      verse: 22,
      textAm: 'እግዚአብሔርም ሙሴን እንዲህ ብሎ ተናገረው፦',
      textEn: 'The LORD spoke to Moses, saying,',
      textOriginal: 'וַיְדַבֵּר יְהוָה אֶל־מֹשֶׁה לֵּאמֹר׃',
      transliteration: "Vaydaber Adonai el-Mosheh lemor."
    },
    {
      verse: 24,
      textAm: '«እግዚአብሔር ይባርክህ፥ ይጠብቅህም፤',
      textEn: '"The LORD bless you and keep you;',
      textOriginal: 'יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ׃',
      transliteration: "Y'varekhekha Adonai v'yishmerekha.",
      strongsWords: [
        { strongsNumber: 'H1288', wordOriginal: 'יְבָרֶכְךָ', transliteration: "y'varekhekha", lemma: 'בָּרַךְ', partOfSpeech: 'verb piel imperfect', definition: 'bless you with abundance', amharicMeaning: 'ይባርክህ' },
        { strongsNumber: 'H8104', wordOriginal: 'וְיִשְׁמְרֶךָ', transliteration: "v'yishmerekha", lemma: 'שָׁמַר', partOfSpeech: 'verb qal imperfect', definition: 'and guard you, protect you', amharicMeaning: 'ይጠብቅህም' }
      ]
    },
    {
      verse: 25,
      textAm: 'እግዚአብሔር ፊቱን በአንተ ላይ ያብራ፥ ይማርህም፤',
      textEn: 'the LORD make his face to shine upon you and be gracious to you;',
      textOriginal: 'יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ׃',
      transliteration: "Ya'er Adonai panav eilekha vichunekka.",
      strongsWords: [
        { strongsNumber: 'H2603', wordOriginal: 'וִיחֻנֶּךָּ', transliteration: 'vichunekka', lemma: 'חָנַן', partOfSpeech: 'verb qal imperfect', definition: 'be gracious to you, show you mercy', amharicMeaning: 'ይማርህም / በጸጋው ይጎብኝህ' }
      ]
    },
    {
      verse: 26,
      textAm: 'እግዚአብሔር ፊቱን ወደ አንተ ያንሣ፥ ሰላምንም ይስጥህ።»',
      textEn: 'the LORD lift up his countenance upon you and give you peace."',
      textOriginal: 'יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם׃',
      transliteration: "Yisa Adonai panav eilekha v'yasem l'kha shalom.",
      strongsWords: [
        { strongsNumber: 'H7965', wordOriginal: 'שָׁלוֹם', transliteration: 'shalom', lemma: 'שָׁלוֹם', partOfSpeech: 'noun masculine singular', definition: 'peace, wholeness, prosperity, total well-being', amharicMeaning: 'ሰላም (ሻሎም)' }
      ]
    }
  ],

  // ኦሪት ዘዳግም ምዕራፍ 6 (Deuteronomy 6 - The Shema)
  'DEU_6': [
    {
      verse: 4,
      textAm: '«እስራኤል ሆይ፥ ስማ፤ አምላካችን እግዚአብሔር አንድ እግዚአብሔር ነው፤',
      textEn: '"Hear, O Israel: The LORD our God, the LORD is one.',
      textOriginal: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃',
      transliteration: "Shema Yisrael Adonai Eloheinu Adonai Echad.",
      strongsWords: [
        { strongsNumber: 'H8085', wordOriginal: 'שְׁמַע', transliteration: 'Shema', lemma: 'שָׁמַע', partOfSpeech: 'verb imperative', definition: 'hear, listen with obedient heart', amharicMeaning: 'ስማ' },
        { strongsNumber: 'H259', wordOriginal: 'אֶחָד', transliteration: 'Echad', lemma: 'אֶחָד', partOfSpeech: 'adjective masculine singular', definition: 'one, united, unique', amharicMeaning: 'አንድ' }
      ]
    },
    {
      verse: 5,
      textAm: 'አንተም አምላክህን እግዚአብሔርን በፍጹም ልብህ፥ በፍጹምም ነፍስህ፥ በፍጹምም ኃይልህ ውደድ።',
      textEn: 'You shall love the LORD your God with all your heart and with all your soul and with all your might.',
      textOriginal: 'וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ׃',
      transliteration: "V'ahavta et Adonai Eloheikha b'khol-l'vavkha uvkhol-nafshekha uvkhol-m'odekha.",
      strongsWords: [
        { strongsNumber: 'H157', wordOriginal: 'וְאָהַבְתָּ', transliteration: "v'ahavta", lemma: 'אָהַב', partOfSpeech: 'verb qal perfect', definition: 'and you shall love with whole devotion', amharicMeaning: 'ውደድ' }
      ]
    }
  ]
};
