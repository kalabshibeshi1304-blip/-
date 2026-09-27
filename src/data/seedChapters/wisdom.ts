import { BibleVerse } from '../../types';

export const WISDOM_SEED: Record<string, BibleVerse[]> = {
  // መጽሐፈ ምሳሌ ምዕራፍ 3 (Proverbs 3 - Trust in the LORD with All Your Heart)
  'PRO_3': [
    {
      verse: 5,
      textAm: 'በፍጹም ልብህ በእግዚአብሔር ታመን፥ በራስህም ማስተዋል አትደገፍ፤',
      textEn: 'Trust in the LORD with all your heart, and do not lean on your own understanding.',
      textOriginal: 'בְּטַח אֶל־יְהוָה בְּכָל־לִבֶּךָ וְאֶל־בִּינָתְךָ אַל־תִּשָּׁעֵן׃',
      transliteration: "B'tach el-Adonai b'khol-libekha v'el-binatkha al-tisha'en.",
      strongsWords: [
        { strongsNumber: 'H982', wordOriginal: 'בְּטַח', transliteration: "b'tach", lemma: 'בָּטַח', partOfSpeech: 'verb qal imperative', definition: 'trust, be confident, rely securely', amharicMeaning: 'ታመን' },
        { strongsNumber: 'H998', wordOriginal: 'בִּינָתְךָ', transliteration: 'binatkha', lemma: 'בִּינָה', partOfSpeech: 'noun feminine singular', definition: 'understanding, human discernment', amharicMeaning: 'ማስተዋልህ' }
      ]
    },
    {
      verse: 6,
      textAm: 'በመንገድህ ሁሉ እርሱን እወቅ፥ እርሱም ጎዳናህን ያቀናልሃል።',
      textEn: 'In all your ways acknowledge him, and he will make straight your paths.',
      textOriginal: 'בְּכָל־דְּרָכֶיךָ דָעֵהוּ וְהוּא יְיַשֵּׁר אֹרְחֹתֶיךָ׃',
      transliteration: "B'khol-d'rakheikha da'ehu v'hu y'yasher orchoteikha.",
      strongsWords: [
        { strongsNumber: 'H3045', wordOriginal: 'דָעֵהוּ', transliteration: "da'ehu", lemma: 'יָדַע', partOfSpeech: 'verb imperative + suffix', definition: 'know Him, submit to Him', amharicMeaning: 'እርሱን እወቅ' },
        { strongsNumber: 'H3474', wordOriginal: 'יְיַשֵּׁר', transliteration: "y'yasher", lemma: 'יָשַׁר', partOfSpeech: 'verb piel imperfect', definition: 'make smooth, direct straight', amharicMeaning: 'ያቀናልሃል' }
      ]
    },
    {
      verse: 7,
      textAm: 'በራስህ አስተያየት ጠቢብ አትሁን፤ እግዚአብሔርን ፍራ፥ ከክፋትም ራቅ፤',
      textEn: 'Be not wise in your own eyes; fear the LORD, and turn away from evil.',
      textOriginal: 'אַל־תְּהִי חָכָם בְּעֵינֶיךָ יְרָא אֶת־יְהוָה וְסוּר מֵרָע׃',
      transliteration: "Al-t'hi chakham b'eineikha y'ra et-Adonai v'sur mera."
    },
    {
      verse: 8,
      textAm: 'ለሥጋህ ፈውስ፥ ለአጥንትህም ቅልጥም ይሆናልና።',
      textEn: 'It will be healing to your flesh and refreshment to your bones.',
      textOriginal: 'רִפְאוּת תְּהִי לְשָׁרֶּךָ וְשִׁקּוּי לְעַצְמוֹתֶיךָ׃',
      transliteration: "Rif'ut t'hi l'sharrekha v'shikkui l'atsmoteikha."
    }
  ],

  // መጽሐፈ መክብብ ምዕራፍ 3 (Ecclesiastes 3 - A Time for Everything)
  'ECC_3': [
    {
      verse: 1,
      textAm: 'ለሁሉ ዘመን አለው፥ ከሰማይ በታችም ለሆነ ነገር ሁሉ ጊዜ አለው፤',
      textEn: 'For everything there is a season, and a time for every matter under heaven:',
      textOriginal: 'לַכֹּל זְמָן וְעֵת לְכָל־חֵפֶץ תַּחַת הַשָּׁמָיִם׃',
      transliteration: "Lakkol z'man v'et l'khol-chefets tachat hashamayim.",
      strongsWords: [
        { strongsNumber: 'H2165', wordOriginal: 'זְמָן', transliteration: "z'man", lemma: 'זְמָן', partOfSpeech: 'noun masculine singular', definition: 'appointed time, season', amharicMeaning: 'ዘመን / ቀጠሮ' },
        { strongsNumber: 'H6256', wordOriginal: 'עֵת', transliteration: 'et', lemma: 'עֵת', partOfSpeech: 'noun feminine singular', definition: 'time, opportunity, era', amharicMeaning: 'ጊዜ' }
      ]
    },
    {
      verse: 2,
      textAm: 'ለመወለድ ጊዜ አለው፥ ለመሞትም ጊዜ አለው፤ ለመትከል ጊዜ አለው፥ የተተከለውንም ለመንቀል ጊዜ አለው፤',
      textEn: 'a time to be born, and a time to die; a time to plant, and a time to pluck up what is planted;',
      textOriginal: 'עֵת לָלֶדֶת וְעֵת לָמוּת עֵת לָטַעַת וְעֵת לַעֲקוֹר נָטוּעַ׃',
      transliteration: "Et laledet v'et lamut et lata'at v'et la'akor natu'a."
    },
    {
      verse: 11,
      textAm: 'ነገርን ሁሉ በጊዜው ውብ አድርጎ ሠራው፤ ደግሞም ዘላለማዊነትን በሰው ልብ ውስጥ አኖረ፥ ነገር ግን እግዚአብሔር ከመጀመሪያ እስከ መጨረሻ ያደረገውን ሥራ ሰው መርምሮ ማግኘት አይችልም።',
      textEn: 'He has made everything beautiful in its time. Also, he has put eternity into man’s heart, yet so that he cannot find out what God has done from the beginning to the end.',
      textOriginal: 'אֶת־הַכֹּל עָשָׂה יָפֶה בְעִתּוֹ גַּם אֶת־הָעֹלָם נָתַן בְּלִבָּם...',
      transliteration: "Et-hakkol asah yafeh v'itto gam et-ha'olam natan b'libbam...",
      strongsWords: [
        { strongsNumber: 'H5769', wordOriginal: 'הָעֹלָם', transliteration: "ha'olam", lemma: 'עוֹלָם', partOfSpeech: 'noun masculine singular', definition: 'eternity, endless age, perpetuity', amharicMeaning: 'ዘላለማዊነት' }
      ]
    }
  ]
};
