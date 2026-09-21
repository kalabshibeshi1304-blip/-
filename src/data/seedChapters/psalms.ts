import { BibleVerse } from '../../types';

export const PSALMS_SEED: Record<string, BibleVerse[]> = {
  // መዝሙረ ዳዊት 1 (The Two Ways - All 6 Verses Complete)
  'PSA_1': [
    {
      verse: 1,
      textAm: 'ምስጉን ነው በክፉዎች ምክር ያልሄደ፥ በኃጢአተኞችም መንገድ ያልቆመ፥ በዋዘኞችም ወንበር ያልተቀመጠ፤',
      textEn: 'Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,',
      textOriginal: 'אַשְׁרֵי־הָאִישׁ אֲשֶׁר לֹא הָלַךְ בַּעֲצַת רְשָׁעִים וּבְדֶרֶךְ חַטָּאִים לֹא עָמָד וּבְמוֹשַׁב לֵצִים לֹא יָשָׁב׃',
      transliteration: "Ashrei-ha'ish asher lo halakh ba'atzat r'sha'im uv'derekh chatta'im lo amad uv'moshav letzim lo yashav.",
      strongsWords: [
        { strongsNumber: 'H835', wordOriginal: 'אַשְׁרֵי', transliteration: 'ashrei', lemma: 'אֶשֶׁר', partOfSpeech: 'noun masculine plural', definition: 'blessed, happy, truly fulfilled', amharicMeaning: 'ምስጉን፤ የተባረከ' },
        { strongsNumber: 'H7563', wordOriginal: 'רְשָׁעִים', transliteration: "r'sha'im", lemma: 'רָשָׁע', partOfSpeech: 'adjective masculine plural', definition: 'wicked, ungodly', amharicMeaning: 'ክፉዎች፤ ኃጢአተኞች' }
      ]
    },
    {
      verse: 2,
      textAm: 'ነገር ግን በእግዚአብሔር ሕግ ደስ ይለዋል፥ ሕጉንም በቀንና በሌሊት ያስባል።',
      textEn: 'but whose delight is in the law of the LORD, and who meditates on his law day and night.',
      textOriginal: 'כִּי אִם־בְּתוֹרַת יְהוָה חֶפְצוֹ וּבְתוֹרָתוֹ יֶהְגֶּה יוֹמָם וָלָיְלָה׃',
      transliteration: "Ki im-b'torat YHWH cheftzo uv'torato yehgeh yomam valaylah.",
      strongsWords: [
        { strongsNumber: 'H8451', wordOriginal: 'בְּתוֹרַת', transliteration: "b'torat", lemma: 'תּוֹרָה', partOfSpeech: 'noun feminine construct', definition: 'in the Law/Instruction of God', amharicMeaning: 'በእግዚአብሔር ሕግ/ቃል' },
        { strongsNumber: 'H1897', wordOriginal: 'יֶהְגֶּה', transliteration: 'yehgeh', lemma: 'הָגָה', partOfSpeech: 'verb, qal imperfect', definition: 'meditates, mutters softly, deeply ponders', amharicMeaning: 'ያሰላስላል / ያስባል' }
      ]
    },
    {
      verse: 3,
      textAm: 'እርሱም በውኃ ፈሳሾች ዳር እንደ ተተከለች፥ ፍሬዋን በየጊዜዋ እንደምትሰጥ፥ ቅጠልዋም እንደማይረግፍ ዛፍ ይሆናል፤ የሚሠራውም ሁሉ ይከናወንለታል።',
      textEn: 'That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither—whatever they do prospers.',
      textOriginal: 'וְהָיָה כְּעֵץ שָׁתוּל עַל־פַּלְגֵי מָיִם אֲשֶׁר פִּרְיוֹ יִתֵּן בְּעִתּוֹ וְעָלֵהוּ לֹא־יִבּוֹל וְכֹל אֲשֶׁר־יַעֲשֶׂה יַצְלִיחַ׃',
      transliteration: "V'hayah k'etz shatul al-palgei mayim asher piryo yitten b'itto v'alehu lo-yibbol v'khol asher-ya'aseh yatzliach."
    },
    {
      verse: 4,
      textAm: 'ክፉዎች እንዲህ አይደሉም፥ ነገር ግን ነፋስ ጠርጎ እንደሚወስደው ገለባ ናቸው።',
      textEn: 'Not so the wicked! They are like chaff that the wind blows away.',
      textOriginal: 'לֹא־כֵן הָרְשָׁעִים כִּי אִם־כַּמֹּץ אֲשֶׁר־תִּדְּפֶנּוּ רוּחַ׃',
      transliteration: "Lo-khen har'sha'im ki im-kammotz asher-tidd'fennu ruach."
    },
    {
      verse: 5,
      textAm: 'ስለዚህ ክፉዎች በፍርድ፥ ኃጢአተኞችም በጻድቃን ማኅበር አይቆሙም።',
      textEn: 'Therefore the wicked will not stand in the judgment, nor sinners in the assembly of the righteous.',
      textOriginal: 'עַל־כֵּן לֹא־יָקֻמוּ רְשָׁעִים בַּמִּשְׁפָּט וְחַטָּאִים בַּעֲדַת צַדִּיקִים׃',
      transliteration: "Al-ken lo-yakumu r'sha'im bammishpat v'chatta'im ba'adat tzaddikim."
    },
    {
      verse: 6,
      textAm: 'እግዚአብሔር የጻድቃንን መንገድ ያውቃልና፥ የክፉዎች መንገድ ግን ትጠፋለች።',
      textEn: 'For the LORD watches over the way of the righteous, but the way of the wicked leads to destruction.',
      textOriginal: 'כִּי־יוֹדֵעַ יְהוָה דֶּרֶךְ צַדִּיקִים וְדֶרֶךְ רְשָׁעִים תֹּאבֵד׃',
      transliteration: "Ki-yode'a YHWH derekh tzaddikim v'derekh r'sha'im toved.",
      strongsWords: [
        { strongsNumber: 'H3045', wordOriginal: 'יוֹדֵעַ', transliteration: "yode'a", lemma: 'יָדַע', partOfSpeech: 'participle active', definition: 'knows with intimate protective covenant care', amharicMeaning: 'ያውቃል (በፍቅር ይጠብቃል)' },
        { strongsNumber: 'H6662', wordOriginal: 'צַדִּיקִים', transliteration: 'tzaddikim', lemma: 'צַדִּיק', partOfSpeech: 'noun masculine plural', definition: 'righteous ones, justified in God', amharicMeaning: 'ጻድቃን' }
      ]
    }
  ],

  // መዝሙረ ዳዊት 23 (The Good Shepherd - All 6 Verses Complete)
  'PSA_23': [
    {
      verse: 1,
      textAm: 'እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም።',
      textEn: 'The LORD is my shepherd, I lack nothing.',
      textOriginal: 'יְהוָה רֹעִי לֹא אֶחְסָר׃',
      transliteration: "YHWH ro'i lo echsar.",
      strongsWords: [
        { strongsNumber: 'H3068', wordOriginal: 'יְהוָה', transliteration: 'YHWH / Yahweh', lemma: 'יהוה', partOfSpeech: 'proper noun', definition: 'the covenant name of God (LORD, I AM)', amharicMeaning: 'ያህዌ፤ እግዚአብሔር ኪዳናዊ አምላክ' },
        { strongsNumber: 'H7462', wordOriginal: 'רֹעִי', transliteration: "ro'i", lemma: 'רָעָה', partOfSpeech: 'participle with suffix', definition: 'my shepherd, pastor, keeper', amharicMeaning: 'እረኛዬ' },
        { strongsNumber: 'H2637', wordOriginal: 'אֶחְסָר', transliteration: 'echsar', lemma: 'חָסֵר', partOfSpeech: 'verb, imperfect', definition: 'lack, want, diminish', amharicMeaning: 'አያሳጣኝም / አልጎድልም' }
      ]
    },
    {
      verse: 2,
      textAm: 'በለመለመ መስክ ያሳድረኛል፤ በዕረፍት ውኃ ዘንድ ይመራኛል።',
      textEn: 'He makes me lie down in green pastures, he leads me beside quiet waters,',
      textOriginal: 'בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי׃',
      transliteration: "Bin'ot deshe yarbitzeni, al-mei menuchot yenahaleni.",
      strongsWords: [
        { strongsNumber: 'H1877', wordOriginal: 'דֶּשֶׁא', transliteration: 'deshe', lemma: 'דֶּשֶׁא', partOfSpeech: 'noun masculine', definition: 'green grass, tender herb', amharicMeaning: 'ለመለመ መስክ' },
        { strongsNumber: 'H4496', wordOriginal: 'מְנֻחוֹת', transliteration: 'menuchot', lemma: 'מְנוּחָה', partOfSpeech: 'noun feminine plural', definition: 'quietness, rest, peace', amharicMeaning: 'የዕረፍት / የሰላም ውኃ' }
      ]
    },
    {
      verse: 3,
      textAm: 'ነፍሴን መለሳት፥ ስለ ስሙም በጽድቅ መንገድ መራኝ።',
      textEn: 'he refreshes my soul. He guides me along the right paths for his name’s sake.',
      textOriginal: 'נַפְשִׁי יְשׁוֹבֵב יַנְחֵנִי בְמַעְגְּלֵי־צֶדֶק לְמַעַן שְׁמוֹ׃',
      transliteration: "Nafshi yeshovev, yancheni vema'gelei-tzedek lema'an shemo.",
      strongsWords: [
        { strongsNumber: 'H5315', wordOriginal: 'נַפְשִׁי', transliteration: 'nafshi', lemma: 'נֶפֶשׁ', partOfSpeech: 'noun feminine with suffix', definition: 'my soul, life, inner being', amharicMeaning: 'ነፍሴን' },
        { strongsNumber: 'H7725', wordOriginal: 'יְשׁוֹבֵב', transliteration: 'yeshovev', lemma: 'שׁוּב', partOfSpeech: 'verb, polel imperfect', definition: 'restores, revives, brings back', amharicMeaning: 'መለሳት / አደሳት' }
      ]
    },
    {
      verse: 4,
      textAm: 'በሞት ጥላ ሸለቆ እንኳ ብሄድ፥ አንተ ከእኔ ጋር ነህና ክፉን አልፈራም፤ በትረህና ምርኵዝህ እነርሱ ያጽናኑኛል።',
      textEn: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
      textOriginal: 'גַּם כִּי־אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא־אִירָא רָע כִּי־אַתָּה עִמָּדִי שִׁבְטְךָ וּמִשְׁעַנְתֶּךָ הֵמָּה יְנַחֲמֻנִי׃',
      transliteration: "Gam ki-elekh begei tzalmavet lo-ira ra ki-atah immadi, shivtekha umish'antekha hemmah yenachamuni.",
      strongsWords: [
        { strongsNumber: 'H6757', wordOriginal: 'צַלְמָוֶת', transliteration: 'tzalmavet', lemma: 'צַלְמָוֶת', partOfSpeech: 'noun feminine', definition: 'shadow of death, deep gloom', amharicMeaning: 'የሞት ጥላ' },
        { strongsNumber: 'H5162', wordOriginal: 'יְנַחֲמֻנִי', transliteration: 'yenachamuni', lemma: 'נָחַם', partOfSpeech: 'verb, piel imperfect', definition: 'they comfort me, console me', amharicMeaning: 'ያጽናኑኛል' }
      ]
    },
    {
      verse: 5,
      textAm: 'በጠላቶቼ ፊት በፊቴ ገበታን አዘጋጀህ፤ ራሴን በዘይት ቀባህ፥ ጽዋዬም የተረፈ ነው።',
      textEn: 'You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.',
      textOriginal: 'תַּעֲרֹךְ לְפָנַי שֻׁלְחָן נֶגֶד צֹרְרָי דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי כּוֹסִי רְוָיָה׃',
      transliteration: "Ta'arokh lefanay shulchan neged tzoreray, dishanta vashemen roshi kosi revayah.",
      strongsWords: [
        { strongsNumber: 'H7979', wordOriginal: 'שֻׁלְחָן', transliteration: 'shulchan', lemma: 'שֻׁלְחָן', partOfSpeech: 'noun masculine', definition: 'table, royal banquet', amharicMeaning: 'ገበታ / ማዕድ' },
        { strongsNumber: 'H7310', wordOriginal: 'רְוָיָה', transliteration: 'revayah', lemma: 'רְוָיָה', partOfSpeech: 'noun feminine', definition: 'overflowing, abundance', amharicMeaning: 'የተረፈ / ሞልቶ የፈሰሰ' }
      ]
    },
    {
      verse: 6,
      textAm: 'ቸርነትህና ምሕረትህ በሕይወቴ ዘመን ሁሉ ይከተሉኛል፥ በእግዚአብሔርም ቤት ለዘላለም እኖራለሁ።',
      textEn: 'Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever.',
      textOriginal: 'אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל־יְמֵי חַיָּי וְשַׁבְתִּי בְּבֵית־יְהוָה לְאֹרֶךְ יָמִים׃',
      transliteration: "Akh tov vachesed yirdefuni kol-yemei chayay, veshavti beveit-YHWH le'orekh yamim.",
      strongsWords: [
        { strongsNumber: 'H2617', wordOriginal: 'וָחֶסֶד', transliteration: 'vachesed', lemma: 'חֶסֶד', partOfSpeech: 'noun masculine', definition: 'unfailing covenant love, mercy, steadfast grace', amharicMeaning: 'ኪዳናዊ ምሕረት / ቸርነት' }
      ]
    }
  ],

  // መዝሙረ ዳዊት 121 (The Keeper of Israel - All 8 Verses Complete)
  'PSA_121': [
    {
      verse: 1,
      textAm: 'ዓይኖቼን ወደ ተራሮች አነሣለሁ፤ ረዳቴ ከወዴት ይምጣ?',
      textEn: 'I lift up my eyes to the mountains—where does my help come from?',
      textOriginal: 'שִׁיר לַמַּעֲלוֹת אֶשָּׂא עֵינַי אֶל־הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי׃',
      transliteration: "Shir lamma'alot essa einay el-heharim me'ayin yavo ezri."
    },
    {
      verse: 2,
      textAm: 'ረዳቴ ሰማይንና ምድርን ከሠራ ከእግዚአብሔር ዘንድ ነው።',
      textEn: 'My help comes from the LORD, the Maker of heaven and earth.',
      textOriginal: 'עֶזְרִי מֵעִם יְהוָה עֹשֵׂה שָׁמַיִם וָאָרֶץ׃',
      transliteration: "Ezri me'im YHWH oseh shamayim va'aretz."
    },
    {
      verse: 3,
      textAm: 'እግርህ እንዲናወጥ አይፈቅድም፤ የሚጠብቅህም አይተኛም።',
      textEn: 'He will not let your foot slip—he who watches over you will not slumber;',
      textOriginal: 'אַל־יִתֵּן לַמּוֹט רַגְלֶךָ אַל־יָנוּם שֹׁמְרֶךָ׃',
      transliteration: "Al-yitten lammot raglekha al-yanum shomrekha."
    },
    {
      verse: 4,
      textAm: 'እነሆ፥ እስራኤልን የሚጠብቅ አይተኛም አያንቀላፋምም።',
      textEn: 'indeed, he who watches over Israel will neither slumber nor sleep.',
      textOriginal: 'הִנֵּה לֹא־יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל׃',
      transliteration: "Hinne lo-yanum v'lo yishan shomer Yisra'el."
    },
    {
      verse: 5,
      textAm: 'እግዚአብሔር ይጠብቅሃል፥ እግዚአብሔርም በቀኝ እጅህ ጥላህ ነው።',
      textEn: 'The LORD watches over you—the LORD is your shade at your right hand;',
      textOriginal: 'יְהוָה שֹׁמְרֶךָ יְהוָה צִלְּךָ עַל־יַד יְמִינֶךָ׃',
      transliteration: "YHWH shomrekha YHWH tzillekha al-yad y'minekha."
    },
    {
      verse: 6,
      textAm: 'ፀሐይ በቀን አያቃጥልህም፥ ጨረቃም በሌሊት።',
      textEn: 'the sun will not harm you by day, nor the moon by night.',
      textOriginal: 'יוֹמָם הַשֶּׁמֶשׁ לֹא־יַכֶּכָּה וְיָרֵחַ בַּלָּיְלָה׃',
      transliteration: "Yomam hashemesh lo-yakkekkoh v'yareach ballaylah."
    },
    {
      verse: 7,
      textAm: 'እግዚአብሔር ከክፉ ሁሉ ይጠብቅሃል፥ ነፍስህንም ይጠብቃታል።',
      textEn: 'The LORD will keep you from all harm—he will watch over your life;',
      textOriginal: 'יְהוָה יִשְׁמָרְךָ מִכָּל־רָע יִשְׁמֹר אֶת־נַפְשֶׁךָ׃',
      transliteration: "YHWH yishmarkha mikkol-ra yishmor et-nafshekha."
    },
    {
      verse: 8,
      textAm: 'እግዚአብሔር መውጣትህንና መግባትህን ከዛሬ ጀምሮ እስከ ዘላለም ይጠብቃል።',
      textEn: 'the LORD will watch over your coming and going both now and forevermore.',
      textOriginal: 'יְהוָה יִשְׁמָר־צֵאתְךָ וּבוֹאֶךָ מֵעַתָּה וְעַד־עוֹלָם׃',
      transliteration: "YHWH yishmor-tzet'kha uvo'ekha me'attah v'ad-olam."
    }
  ],

  // መዝሙረ ዳዊት 150 (Final Doxology - All 6 Verses Complete)
  'PSA_150': [
    {
      verse: 1,
      textAm: 'ሃሌ ሉያ። እግዚአብሔርን በመቅደሱ አመስግኑት፤ በኃይሉ ጠፈር አመስግኑት።',
      textEn: 'Praise the LORD. Praise God in his sanctuary; praise him in his mighty heavens.',
      textOriginal: 'הַלְלוּ יָהּ הַלְלוּ־אֵל בְּקָדְשׁוֹ הַלְלוּהוּ בִּרְקִיעַ עֻזּוֹ׃',
      transliteration: "Halelu Yah halelu-El b'kodsho haleluhu birki'a uzzo."
    },
    {
      verse: 2,
      textAm: 'በችሎቱ አመስግኑት፤ እንደ ታላቅነቱ ብዛት አመስግኑት።',
      textEn: 'Praise him for his acts of power; praise him for his surpassing greatness.',
      textOriginal: 'הַלְלוּהוּ בִגְבוּרֹתָיו הַלְלוּהוּ כְּרֹב גֻּדְלוֹ׃',
      transliteration: "Haleluhu vigvurotav haleluhu k'rov gudlo."
    },
    {
      verse: 3,
      textAm: 'በእልልታ ድምፅ አመስግኑት፤ በበገናና በመሰንቆ አመስግኑት።',
      textEn: 'Praise him with the sounding of the trumpet, praise him with the harp and lyre,',
      textOriginal: 'הַלְלוּהוּ בְּתֵקַע שׁוֹפָר הַלְלוּהוּ בְּנֵבֶל וְכִנּוֹר׃',
      transliteration: "Haleluhu b'teka shofar haleluhu b'nevel v'khinnor."
    },
    {
      verse: 4,
      textAm: 'በከበሮና በዘፈን አመስግኑት፤ በአውታርና በእምቢልታ አመስግኑት።',
      textEn: 'praise him with timbrel and dancing, praise him with the strings and pipe,',
      textOriginal: 'הַלְלוּהוּ בְתֹף וּמָחוֹל הַלְלוּהוּ בְּמִנִּים וְעוּגָב׃',
      transliteration: "Haleluhu v'tof umachol haleluhu b'minnim v'ugav."
    },
    {
      verse: 5,
      textAm: 'ድምፁ መልካም በሆነ ጸናጽል አመስግኑት፤ እልልታ ባለው ጸናጽል አመስግኑት።',
      textEn: 'praise him with the clash of cymbals, praise him with resounding cymbals.',
      textOriginal: 'הַלְלוּהוּ בְצִלְצְלֵי־שָׁמַע הַלְלוּהוּ בְּצִלְצְלֵי תְרוּעָה׃',
      transliteration: "Haleluhu v'tziltz'lei-shama haleluhu b'tziltz'lei t'ruah."
    },
    {
      verse: 6,
      textAm: 'እስትንፋስ ያለው ሁሉ እግዚአብሔርን ያመስግን። ሃሌ ሉያ።',
      textEn: 'Let everything that has breath praise the LORD. Praise the LORD.',
      textOriginal: 'כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּ־יָהּ׃',
      transliteration: "Kol hanshamah tehalel Yah, halelu-Yah.",
      strongsWords: [
        { strongsNumber: 'H5397', wordOriginal: 'הַנְּשָׁמָה', transliteration: 'hanshamah', lemma: 'נְשָׁמָה', partOfSpeech: 'noun feminine', definition: 'breath, living being created by God', amharicMeaning: 'እስትንፋስ ያለው ሁሉ' },
        { strongsNumber: 'H1984', wordOriginal: 'תְּהַלֵּל', transliteration: 'tehalel', lemma: 'הָלַל', partOfSpeech: 'verb, piel', definition: 'praise, celebrate, glorify', amharicMeaning: 'ያመስግን' }
      ]
    }
  ]
};
