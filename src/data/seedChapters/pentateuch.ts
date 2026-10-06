import { BibleVerse } from '../../types';

export const PENTATEUCH_SEED: Record<string, BibleVerse[]> = {
  // ኦሪት ዘፍጥረት ምዕራፍ 1 (Genesis 1 - Complete 31 Verses)
  'GEN_1': [
    {
      verse: 1,
      textAm: 'በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።',
      textEn: 'In the beginning, God created the heavens and the earth.',
      textOriginal: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃',
      transliteration: "B'reshit bara Elohim et hashamayim v'et ha'aretz.",
      strongsWords: [
        { strongsNumber: 'H7225', wordOriginal: 'בְּרֵאשִׁית', transliteration: "b'reshit", lemma: 'רֵአשִׁית', partOfSpeech: 'noun feminine singular', definition: 'in the beginning, first time', amharicMeaning: 'በመጀመሪያ' },
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
      verse: 4,
      textAm: 'እግዚአብሔርም ብርሃኑ መልካም እንደ ሆነ አየ፤ እግዚአብሔርም ብርሃኑንና ጨለማውን ለየ።',
      textEn: 'And God saw that the light was good. And God separated the light from the darkness.',
      textOriginal: 'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר כִּי־טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ׃',
      transliteration: "Vayyar Elohim et-ha'or ki-tov vayyavdel Elohim bein ha'or uvein hachoshekh."
    },
    {
      verse: 5,
      textAm: 'እግዚአብሔርም ብርሃኑን «ቀን» ብሎ ጠራው፥ ጨለማውንም «ሌሊት» አለው። ማታም ሆነ ጥዋትም ሆነ፥ አንድ ቀን።',
      textEn: 'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
      textOriginal: 'וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם אֶחָד׃',
      transliteration: "Vayyikra Elohim la'or yom v'lachoshekh kara laylah vayhi-erev vayhi-voker yom echad."
    },
    {
      verse: 6,
      textAm: 'እግዚአብሔርም አለ፦ «በውሆች መካከል ጠፈር ይሁን፥ በውኃና በውኃ መካከልም ይክፈል»።',
      textEn: 'And God said, "Let there be an expanse in the midst of the waters, and let it separate the waters from the waters."',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים יְהִי רָקִיעַ בְּתוֹךְ הַמָּיִם וִיהִי מַבְדִּיל בֵּין מַיִם לָמָיִם׃',
      transliteration: "Vayyomer Elohim yehi raki'a b'tokh hamayim vihi mavdil bein mayim lamayim."
    },
    {
      verse: 7,
      textAm: 'እግዚአብሔርም ጠፈርን አደረገ፥ ከጠፈር በታችና ከጠፈር በላይ ያሉትንም ውሆች ለየ፤ እንዲሁም ሆነ።',
      textEn: 'And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so.',
      textOriginal: 'וַיַּעַשׂ אֱלֹהִים אֶת־הָרָקִיעַ וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ וַיְהִי־כֵן׃',
      transliteration: "Vayya'as Elohim et-haraki'a..."
    },
    {
      verse: 8,
      textAm: 'እግዚአብሔርም ጠፈሩን «ሰማይ» ብሎ ጠራው። ማታም ሆነ ጥዋትም ሆነ፥ ሁለተኛ ቀን።',
      textEn: 'And God called the expanse Heaven. And there was evening and there was morning, the second day.',
      textOriginal: 'וַיִּקְרָא אֱלֹהִים לָרָקִיעַ שָׁמָיִם וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם שֵׁנִי׃',
      transliteration: "Vayyikra Elohim laraki'a shamayim vayhi-erev vayhi-voker yom sheni."
    },
    {
      verse: 9,
      textAm: 'እግዚአብሔርም አለ፦ «ከሰማይ በታች ያለው ውኃ ወደ አንድ ስፍራ ይሰብሰብ፥ የብሱም ይገለጥ»፤ እንዲሁም ሆነ።',
      textEn: 'And God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear." And it was so.',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים יִקָּווּ הַמַּיִם מִתַּחַת הַשָּׁמַיִם אֶל־מָקוֹם אֶחָד וְתֵרָאֶה הַיַּבָּשָׁה וַיְהִי־כֵן׃',
      transliteration: "Vayyomer Elohim yikkavu hamayim mitachat hashamayim el-makom echad..."
    },
    {
      verse: 10,
      textAm: 'እግዚአብሔርም የብሱን «ምድር» ብሎ ጠራው፥ የውኃውንም መከማቻ «ባሕር» አለው፤ እግዚአብሔርም እርሱ መልካም እንደ ሆነ አየ።',
      textEn: 'God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good.',
      textOriginal: 'וַיִּקְרָא אֱלֹהִים לַיַּבָּשָׁה אֶרֶץ וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים וַיַּרְא אֱלֹהִים כִּי־טוֹב׃',
      transliteration: "Vayyikra Elohim layabbashah eretz ulmikveh hamayim kara yammim..."
    },
    {
      verse: 11,
      textAm: 'እግዚአብሔርም አለ፦ «ምድር ዘሩ በእርሱ ያለውን ቡቃያና ዘርን የሚሰጠውን ሣር፥ በምድርም ላይ እንደ ወገኑ ዘሩ በእርሱ ያለውን ፍሬ የሚያፈራውን ዛፍ ታብቅል»፤ እንዲሁም ሆነ።',
      textEn: 'And God said, "Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth." And it was so.',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים תַּדְשֵׁא הָאָרֶץ דֶּשֶׁא עֵשֶׂב מַזְרִיעַ זֶרַע עֵץ פְּרִי עֹשֶׂה פְּרִי לְמִינוֹ...',
      transliteration: "Vayyomer Elohim tadshe ha'aretz deshe..."
    },
    {
      verse: 12,
      textAm: 'ምድርም ዘሩ በእርሱ ያለውን ቡቃያና እንደ ወገኑ ዘርን የሚሰጠውን ሣር፥ እንደ ወገኑም ዘሩ በእርሱ ያለውን ፍሬ የሚያፈራውን ዛፍ አበቀለች፤ እግዚአብሔርም እርሱ መልካም እንደ ሆነ አየ።',
      textEn: 'The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good.',
      textOriginal: 'וַתּוֹצֵא הָאָרֶץ דֶּשֶׁא עֵשֶׂב מַזְרִיעַ זֶרַע לְמִינֵהוּ...',
      transliteration: "Vatotse ha'aretz deshe..."
    },
    {
      verse: 13,
      textAm: 'ማታም ሆነ ጥዋትም ሆነ፥ ሦስተኛ ቀን።',
      textEn: 'And there was evening and there was morning, the third day.',
      textOriginal: 'וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם שְׁלִישִׁי׃',
      transliteration: "Vayhi-erev vayhi-voker yom shlishi."
    },
    {
      verse: 14,
      textAm: 'እግዚአብሔርም አለ፦ «ቀንንና ሌሊትን ይለዩ ዘንድ ብርሃናት በሰማይ ጠፈር ይሁኑ፤ ለምልክቶች ለዘመናት ለዕለታት ለዓመታትም ይሁኑ፤',
      textEn: 'And God said, "Let there be lights in the expanse of the heavens to separate the day from the night. And let them be for signs and for seasons, and for days and years,',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים יְהִי מְאֹרֹת בִּרְקִיעַ הַשָּׁמַיִם לְהַבְדִּיל בֵּין הַיּוֹם וּבֵין הַלָּיְלָה...',
      transliteration: "Vayyomer Elohim yehi m'orot birki'a hashamayim..."
    },
    {
      verse: 15,
      textAm: 'በምድር ላይ ያበሩ ዘንድ በሰማይ ጠፈር ብርሃናት ይሁኑ»፤ እንዲሁም ሆነ።',
      textEn: 'and let them be lights in the expanse of the heavens to give light upon the earth." And it was so.',
      textOriginal: 'וְהָיוּ לִמְאוֹרֹת בִּרְקִיעַ הַשָּׁמַיִם לְהָאִיר עַל־הָאָרֶץ וַיְהִי־כֵן׃',
      transliteration: "V'hayu lim'orot birki'a hashamayim l'ha'ir al-ha'aretz vayhi-khen."
    },
    {
      verse: 16,
      textAm: 'እግዚአብሔርም ሁለት ታላላቆች ብርሃናትን አደረገ፤ ታላቁ ብርሃን በቀን እንዲሠለጥን፥ ታናሹም ብርሃን በሌሊት እንዲሠለጥን፤ ከዋክብትንም ደግሞ አደረገ።',
      textEn: 'And God made the two great lights—the greater light to rule the day and the lesser light to rule the night—and the stars.',
      textOriginal: 'וַיַּעַשׂ אֱלֹהִים אֶת־שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים אֶת־הַמָּאוֹר הַגָּדֹל לְמֶמְשֶׁלֶת הַיּוֹם...',
      transliteration: "Vayya'as Elohim et-shnei ham'orot hagdolim..."
    },
    {
      verse: 17,
      textAm: 'በምድር ላይ ያበሩ ዘንድ እግዚአብሔር በሰማይ ጠፈር አኖራቸው፤',
      textEn: 'And God set them in the expanse of the heavens to give light on the earth,',
      textOriginal: 'וַיִּתֵּן אֹתָם אֱלֹהִים בִּרְקִיעַ הַשָּׁמָיִם לְהָאִיר עַל־הָאָרֶץ׃',
      transliteration: "Vayyiten otam Elohim birki'a hashamayim..."
    },
    {
      verse: 18,
      textAm: 'በቀንም በሌሊትም እንዲሠለጥኑ፥ ብርሃኑንና ጨለማውንም እንዲለዩ፤ እግዚአብሔርም እርሱ መልካም እንደ ሆነ አየ።',
      textEn: 'to rule over the day and over the night, and to separate the light from the darkness. And God saw that it was good.',
      textOriginal: 'וְלִמְשֹׁל בַּיּוֹם וּבַלַּיְלָה וּלֲהַבְדִּיל בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ וַיַּרְא אֱלֹהִים כִּי־טוֹב׃',
      transliteration: "V'limshol bayyom uvallaylah..."
    },
    {
      verse: 19,
      textAm: 'ማታም ሆነ ጥዋትም ሆነ፥ አራተኛ ቀን።',
      textEn: 'And there was evening and there was morning, the fourth day.',
      textOriginal: 'וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם רְבִיעִי׃',
      transliteration: "Vayhi-erev vayhi-voker yom revi'i."
    },
    {
      verse: 20,
      textAm: 'እግዚአብሔርም አለ፦ «ውሆች ሕያው ነፍስ ያላቸውን ተንቀሳቃሾች ያውጡ፥ ወፎችም ከምድር በላይ በሰማይ ጠፈር ይብረሩ»።',
      textEn: 'And God said, "Let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens."',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים יִשְׁרְצוּ הַמַּיִם שֶׁרֶץ נֶפֶשׁ חַיָּה וְעוֹף יְעוֹפֵף עַל־הָאָרֶץ...',
      transliteration: "Vayyomer Elohim yishretsu hamayim..."
    },
    {
      verse: 21,
      textAm: 'እግዚአብሔርም ታላላቆች አንበሪዎችን፥ ውኃ እንደ ወገኑ ያወጣቸውን ተንቀሳቃሾቹን ሕያዋን ፍጥረታት ሁሉ፥ የሚበርሩትንም ወፎች ሁሉ እንደ ወገኑ ፈጠረ፤ እግዚአብሔርም እርሱ መልካም እንደ ሆነ አየ።',
      textEn: 'So God created the great sea creatures and every living creature that moves, with which the waters swarm, according to their kinds, and every winged bird according to its kind. And God saw that it was good.',
      textOriginal: 'וַיִּבְרָא אֱלֹהִים אֶת־הַתַּנִּינִם הַגְּדֹלִים...',
      transliteration: "Vayyivra Elohim et-hatanninim hagdolim..."
    },
    {
      verse: 22,
      textAm: 'እግዚአብሔርም ባረካቸው እንዲህም አለ፦ «ብዙ፥ ተባዙም፥ የባሕርንም ውኃ ሙሉአት፤ ወፎችም በምድር ላይ ይብዙ»።',
      textEn: 'And God blessed them, saying, "Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth."',
      textOriginal: 'וַיְבָרֶךְ אֹתָם אֱלֹהִים לֵאמֹר פְּרוּ וּרְבוּ וּמִלְאוּ אֶת־הַמַּיִם בַּיַּמִּים...',
      transliteration: "Vayvarekh otam Elohim lemor p'ru urvu..."
    },
    {
      verse: 23,
      textAm: 'ማታም ሆነ ጥዋትም ሆነ፥ አምስተኛ ቀን።',
      textEn: 'And there was evening and there was morning, the fifth day.',
      textOriginal: 'וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם חֲמִישִׁי׃',
      transliteration: "Vayhi-erev vayhi-voker yom chamishi."
    },
    {
      verse: 24,
      textAm: 'እግዚአብሔርም አለ፦ «ምድር ሕያዋን ፍጥረታትን እንደ ወገኑ፥ እንስሳትንና ተንቀሳቃሾችን የምድርም አራዊትን እንደ ወገኑ፥ ታውጣ»፤ እንዲሁም ሆነ።',
      textEn: 'And God said, "Let the earth bring forth living creatures according to their kinds—livestock and creeping things and beasts of the earth according to their kinds." And it was so.',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים תּוֹצֵא הָאָרֶץ נֶפֶשׁ חַיָּה לְמִינָהּ בְּהֵמָה וָרֶמֶשׂ וְחַיְתוֹ־אֶרֶץ לְמִינָהּ...',
      transliteration: "Vayyomer Elohim totse ha'aretz..."
    },
    {
      verse: 25,
      textAm: 'እግዚአብሔርም የምድር አራዊትን እንደ ወገኑ አደረገ፥ እንስሳትንም እንደ ወገኑ፥ በምድር ላይ የሚንቀሳቀሱትንም ሁሉ እንደ ወገኑ፤ እግዚአብሔርም እርሱ መልካም እንደ ሆነ አየ።',
      textEn: 'And God made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. And God saw that it was good.',
      textOriginal: 'וַיַּעַשׂ אֱלֹהִים אֶת־חַיַּת הָאָרֶץ לְמִינָהּ...',
      transliteration: "Vayya'as Elohim et-chayyat ha'aretz..."
    },
    {
      verse: 26,
      textAm: 'እግዚአብሔርም አለ፦ «ሰውን በመልካችን እንደ ምሳሌአችን እንፍጠር፤ የባሕር ዓሦችንና የሰማይ ወፎችን፥ እንስሳትንና ምድርን ሁሉ፥ በምድር ላይ የሚንቀሳቀሱትንም ሁሉ ይግዙ።»',
      textEn: 'Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth."',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם...',
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
      verse: 28,
      textAm: 'እግዚአብሔርም ባረካቸው፥ እንዲህም አላቸው፦ «ብዙ፥ ተባዙም፥ ምድርንም ሙሉአት፥ ግዟትም፤ የባሕር ዓሦችንና የሰማይ ወፎችን፥ በምድር ላይ የሚንቀሳቀሱትንም ሕያዋን ሁሉ ግዟቸው።»',
      textEn: 'And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth."',
      textOriginal: 'וַיְבָרֶךְ אֹתָם אֱלֹהִים וַיֹּאמֶר לָהֶם אֱלֹהִים פְּרוּ וּרְבוּ וּמִלְאוּ אֶת־הָאָרֶץ...',
      transliteration: "Vayvarekh otam Elohim..."
    },
    {
      verse: 29,
      textAm: 'እግዚአብሔርም አለ፦ «እነሆ፥ መብል ይሆናችሁ ዘንድ በምድር ፊት ሁሉ ላይ ዘሩ በእርሱ ያለውን ሣር ሁሉ፥ የዛፍ ፍሬ ዘር ያለውንም ዛፍ ሁሉ ሰጥቻችኋለሁ፤',
      textEn: 'And God said, "Behold, I have given you every plant yielding seed that is on the face of all the earth, and every tree with seed in its fruit. You shall have them for food.',
      textOriginal: 'וַיֹּאמֶר אֱלֹהִים הִנֵּה נָתַתִּי לָכֶם אֶת־כָּל־עֵשֶׂב זֹרֵעַ זֶרַע...',
      transliteration: "Vayyomer Elohim hinneh natatti lakhem..."
    },
    {
      verse: 30,
      textAm: 'ለምድር አራዊት ሁሉ፥ ለሰማይም ወፎች ሁሉ፥ ሕያው ነፍስ ላላቸው ለምድር ተንቀሳቃሾችም ሁሉ የሚበቅለው ለምለም ሣር ሁሉ መብል ይሁንላቸው»፤ እንዲሁም ሆነ።',
      textEn: 'And to every beast of the earth and to every bird of the heavens and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food." And it was so.',
      textOriginal: 'וּלְכָל־חַיַּת הָאָרֶץ וּלְכָל־עוֹף הַשָּׁמַיִם...',
      transliteration: "Ulkhol-chayyat ha'aretz..."
    },
    {
      verse: 31,
      textAm: 'እግዚአብሔርም ያደረገውን ሁሉ አየ፥ እነሆም፥ እጅግ መልካም ነበረ። ማታም ሆነ ጥዋትም ሆነ፥ ስድስተኛ ቀን።',
      textEn: 'And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.',
      textOriginal: 'וַיַּרְአ אֱלֹהִים אֶת־כָּל־אֲשֶׁר עָשָׂה וְהִנֵּה־טוֹב מְאֹד וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם הַשִּׁשִּׁי׃',
      transliteration: "Vayyar Elohim et-kol-asher asah v'hinneh-tov me'od..."
    }
  ],

  // ኦሪት ዘጸአት ምዕራፍ 20 (Exodus 20 - The Ten Commandments - Complete)
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
      verse: 5,
      textAm: 'አትስገድላቸው፥ አታምልካቸውም፤ በሚጠሉኝ እስከ ሦስተኛና እስከ አራተኛ ትውልድ ድረስ የአባቶችን ኃጢአት በልጆች ላይ የማመጣ፥',
      textEn: 'You shall not bow down to them or serve them, for I the LORD your God am a jealous God, visiting the iniquity of the fathers on the children...',
      textOriginal: 'לֹא־תִשְׁתַּחֲוֶה לָהֶם וְלֹא תָעָבְדֵם...',
      transliteration: "Lo-tishtachaveh lahem..."
    },
    {
      verse: 6,
      textAm: 'ለሚወድዱኝ ትእዛዜንም ለሚጠብቁ እስከ ሺህ ትውልድ ድረስ ምሕረትን የማደርግ እኔ እግዚአብሔር አምላክህ ቀናተኛ አምላክ ነኝና።',
      textEn: 'but showing steadfast love to thousands of those who love me and keep my commandments.',
      textOriginal: 'וְעֹשֶׂה חֶסֶד לַאֲלָפִים לְאֹהֲבַי וּלְשֹׁמְרֵי מִצְוֹתָי׃',
      transliteration: "V'oseh chesed la'alafim..."
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
      verse: 9,
      textAm: 'ስድስት ቀን ሥራ ተግባርህንም ሁሉ አድርግ፤',
      textEn: 'Six days you shall labor, and do all your work,',
      textOriginal: 'שֵׁשֶׁת יָמִים תַּעֲבֹד וְעָשִׂיתָ כָּל־מְלַאכְתֶּךָ׃',
      transliteration: "Sheshet yamim ta'avod..."
    },
    {
      verse: 10,
      textAm: 'ሰባተኛው ቀን ግን ለእግዚአብሔር ለአምላክህ ሰንበት ነው፤ አንተ፥ ወንድ ልጅህም፥ ሴት ልጅህም፥ ሎሌህም፥ ገረድህም፥ ከብትህም፥ በደጆችህ ውስጥ ያለ እንግዳ በእርሱ ምንም ሥራ አትሥሩ፤',
      textEn: 'but the seventh day is a Sabbath to the LORD your God. On it you shall not do any work, you, or your son, or your daughter...',
      textOriginal: 'וְיוֹם הַשְּׁבִיעִי שַׁבָּת לַיהוָה אֱלֹהֶיךָ...',
      transliteration: "V'yom hashvi'i shabbat..."
    },
    {
      verse: 11,
      textAm: 'እግዚአብሔር በስድስት ቀን ሰማይንና ምድርን ባሕርንም በእነርሱም ያለውን ሁሉ ፈጥሮ በሰባተኛው ቀን አርፎአልና፤ ስለዚህ እግዚአብሔር የሰንበትን ቀን ባረከው ቀደሰውም።',
      textEn: 'For in six days the LORD made heaven and earth, the sea, and all that is in them, and rested on the seventh day. Therefore the LORD blessed the Sabbath day and made it holy.',
      textOriginal: 'כִּי שֵׁשֶׁת־יָמִים עָשָׂה יְהוָה אֶת־הַשָּׁמַיִם וְאֶת־הָאָרֶץ...',
      transliteration: "Ki sheshet-yamim asah Adonai..."
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
      verse: 23,
      textAm: '«ለአሮንና ለልጆቹ እንዲህ ብለህ ንገራቸው፦ የእስራኤልን ልጆች እንዲህ ብላችሁ ትባርኳቸዋላችሁ፤',
      textEn: '"Speak to Aaron and his sons, saying, Thus you shall bless the people of Israel: you shall say to them,',
      textOriginal: 'דַּבֵּר אֶל־אַהֲרֹן וְאֶל־בָּנָיו לֵאמֹר כֹּה תְבָרֲכוּ אֶת־בְּנֵי יִשְׂרָאֵל אָמוֹר לָהֶם׃',
      transliteration: "Daber el-Aharon v'el-banav lemor..."
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
    },
    {
      verse: 27,
      textAm: 'እንዲሁም ስሜን በእስራኤል ልጆች ላይ ያደርጋሉ፥ እኔም እባርካቸዋለሁ።',
      textEn: '"So shall they put my name upon the people of Israel, and I will bless them."',
      textOriginal: 'וְשָׂמוּ אֶת־שְׁמִי עַל־בְּנֵי יִשְׂרָאֵל וַאֲנִי אֲבָרֲכֵם׃',
      transliteration: "V'samu et-shmi al-bnei Yisrael va'ani avarakhem."
    }
  ],

  // ኦሪት ዘዳግም ምዕራፍ 6 (Deuteronomy 6 - The Shema)
  'DEU_6': [
    {
      verse: 1,
      textAm: 'በእርስዋ ትወርሱአት ዘንድ በምትሻገሩባት ምድር ታደርጉት ዘንድ አምላካችሁ እግዚአብሔር እንድታስተምሩ ያዘዛት ትእዛዝና ሥርዓት ፍርድም ይህች ናት፤',
      textEn: '"Now this is the commandment—the statutes and the rules—that the LORD your God commanded me to teach you...',
      textOriginal: 'וְזֹאת הַמִּצְוָה הַחֻקִּים וְהַמִּשְׁפָּטִים...',
      transliteration: "V'zot hamitsvah hachukkim v'hamishpatim..."
    },
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
