import { BibleVerse } from '../../types';

export const GOSPELS_SEED: Record<string, BibleVerse[]> = {
  // ዮሐንስ ወንጌል ምዕራፍ 1 (John 1 - The Word Became Flesh)
  'JHN_1': [
    {
      verse: 1,
      textAm: 'በመጀመሪያው ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ።',
      textEn: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      textOriginal: 'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.',
      transliteration: "En archē ēn ho logos, kai ho logos ēn pros ton theon, kai theos ēn ho logos.",
      strongsWords: [
        { strongsNumber: 'G746', wordOriginal: 'ἀρχῇ', transliteration: 'archē', lemma: 'ἀρχή', partOfSpeech: 'noun dative feminine', definition: 'beginning, origin, first cause', amharicMeaning: 'መጀመሪያ / ጥንት' },
        { strongsNumber: 'G3056', wordOriginal: 'λόγος', transliteration: 'logos', lemma: 'λόγος', partOfSpeech: 'noun nominative masculine', definition: 'the Word, Divine Expression, Christ', amharicMeaning: 'ቃል (ኢየሱስ ክርስቶስ)' },
        { strongsNumber: 'G2316', wordOriginal: 'θεός', transliteration: 'theos', lemma: 'θεός', partOfSpeech: 'noun nominative masculine', definition: 'God, Deity, the Supreme One', amharicMeaning: 'እግዚአብሔር / አምላክ' }
      ]
    },
    {
      verse: 2,
      textAm: 'ይህ በመጀመሪያው በእግዚአብሔር ዘንድ ነበረ።',
      textEn: 'He was in the beginning with God.',
      textOriginal: 'οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν.',
      transliteration: "houtos ēn en archē pros ton theon."
    },
    {
      verse: 3,
      textAm: 'ሁሉ በእርሱ ሆነ፥ ከሆነውም አንዳች ስንኳ ያለ እርሱ አልሆነም።',
      textEn: 'All things were made through him, and without him was not any thing made that was made.',
      textOriginal: 'πάντα δι’ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν.',
      transliteration: "panta di' autou egeneto, kai chōris autou egeneto oude hen ho gegonen.",
      strongsWords: [
        { strongsNumber: 'G3956', wordOriginal: 'πάντα', transliteration: 'panta', lemma: 'πᾶς', partOfSpeech: 'adjective plural neuter', definition: 'all things, whole creation', amharicMeaning: 'ሁሉ / ፍጥረት በሙሉ' }
      ]
    },
    {
      verse: 4,
      textAm: 'በእርሱ ሕይወት ነበረች፥ ሕይወትም የሰው ብርሃን ነበረች።',
      textEn: 'In him was life, and the life was the light of men.',
      textOriginal: 'ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων·',
      transliteration: "en autō zōē ēn, kai hē zōē ēn to phōs tōn anthrōpōn;",
      strongsWords: [
        { strongsNumber: 'G2222', wordOriginal: 'ζωὴ', transliteration: 'zōē', lemma: 'ζωή', partOfSpeech: 'noun nominative feminine', definition: 'life, divine eternal life', amharicMeaning: 'ሕይወት / የዘላለም ሕይወት' },
        { strongsNumber: 'G5457', wordOriginal: 'φῶς', transliteration: 'phōs', lemma: 'φῶς', partOfSpeech: 'noun nominative neuter', definition: 'light, divine illumination and truth', amharicMeaning: 'ብርሃን' }
      ]
    },
    {
      verse: 5,
      textAm: 'ብርሃንም በጨለማ ይበራል፥ ጨለማውም አላሸነፈውም።',
      textEn: 'The light shines in the darkness, and the darkness has not overcome it.',
      textOriginal: 'καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.',
      transliteration: "kai to phōs en tē skotia phainei, kai hē skotia auto ou katelaben."
    },
    {
      verse: 12,
      textAm: 'ለተቀበሉት ሁሉ ግን፥ በስሙ ለሚያምኑት ለእነርሱ የእግዚአብሔር ልጆች ይሆኑ ዘንድ ሥልጣንን ሰጣቸው፤',
      textEn: 'But to all who did receive him, who believed in his name, he gave the right to become children of God,',
      textOriginal: 'ὅσοι δὲ ἔλαβον αὐτόν, ἔδωκεν αὐτοῖς ἐξουσίαν τέκνα θεοῦ γενέσθαι, τοῖς πιστεύουσιν εἰς τὸ ὄνομα αὐτοῦ,',
      transliteration: "hosoi de elabon auton, edōken autois exousian tekna theou genesthai, tois pisteuousin eis to onoma autou,",
      strongsWords: [
        { strongsNumber: 'G1849', wordOriginal: 'ἐξουσίαν', transliteration: 'exousian', lemma: 'ἐξουσία', partOfSpeech: 'noun accusative feminine', definition: 'right, power, divine authority, privilege', amharicMeaning: 'ሥልጣን / መብት' },
        { strongsNumber: 'G5043', wordOriginal: 'τέκνα', transliteration: 'tekna', lemma: 'τέκνον', partOfSpeech: 'noun nominative plural neuter', definition: 'children, born ones, heirs', amharicMeaning: 'ልጆች' },
        { strongsNumber: 'G4100', wordOriginal: 'πιστεύουσιν', transliteration: 'pisteuousin', lemma: 'πιστεύω', partOfSpeech: 'verb present active', definition: 'believing, placing saving trust', amharicMeaning: 'በእምነት ለሚቀበሉት' }
      ]
    },
    {
      verse: 14,
      textAm: 'ቃልም ሥጋ ሆነ፤ ጸጋንና እውነትንም ተሞልቶ በእኛ አደረ፥ አንድ ልጅም ከአባቱ ዘንድ እንዳለው ክብር የሆነው ክብሩን አየን።',
      textEn: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
      textOriginal: 'Καὶ ὁ λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν, καὶ ἐθεασάμεθα τὴν δόξαν αὐτοῦ, δόξαν ὡς μονογενοῦς παρὰ πατρός, πλήρης χάριτος καὶ ἀληθείας.',
      transliteration: "Kai ho logos sarx egeneto kai eskēnōsen en hēmin, kai etheasametha tēn doxan autou, doxan hōs monogenous para patros, plērēs charitos kai alētheias.",
      strongsWords: [
        { strongsNumber: 'G4561', wordOriginal: 'σὰρξ', transliteration: 'sarx', lemma: 'σάρξ', partOfSpeech: 'noun nominative feminine', definition: 'flesh, human nature without sin', amharicMeaning: 'ሥጋ (ሰው ሆነ)' },
        { strongsNumber: 'G4637', wordOriginal: 'ἐσκήνωσεν', transliteration: 'eskēnōsen', lemma: 'σκηνόω', partOfSpeech: 'verb aorist active', definition: 'tabernacled, pitched tent, dwelt', amharicMeaning: 'በእኛ አደረ / ድንኳኑን ተከለ' },
        { strongsNumber: 'G3439', wordOriginal: 'μονογενοῦስ', transliteration: 'monogenous', lemma: 'μονογενής', partOfSpeech: 'adjective genitive', definition: 'only-begotten, uniquely precious Son', amharicMeaning: 'አንድያ ልጅ' },
        { strongsNumber: 'G5485', wordOriginal: 'χάριτος', transliteration: 'charitos', lemma: 'χάρις', partOfSpeech: 'noun genitive feminine', definition: 'grace, unmerited divine favor', amharicMeaning: 'ጸጋ' },
        { strongsNumber: 'G225', wordOriginal: 'ἀληθείας', transliteration: 'alētheias', lemma: 'ἀλήθεια', partOfSpeech: 'noun genitive feminine', definition: 'truth, divine reality', amharicMeaning: 'እውነት' }
      ]
    },
    {
      verse: 18,
      textAm: 'መቼም ቢሆን እግዚአብሔርን ያየው አንድ ስንኳ የለም፤ በአባቱ እቅፍ ያለ አንድ ልጁ እርሱ ተረከው።',
      textEn: 'No one has ever seen God; the only God, who is at the Father’s side, he has made him known.',
      textOriginal: 'θεὸν οὐδεὶς ἑώρακεν πώποτε· μονογενὴς θεὸς ὁ ὢν εἰς τὸν κόλπον τοῦ πατρὸς ἐκεῖνος ἐξηγήσατο.',
      transliteration: "theon oudeis heōraken pōpote; monogenēs theos ho ōn eis ton kolpon tou patros ekeinos exēgēsato."
    }
  ],

  // ዮሐንስ ወንጌል ምዕራፍ 3 (John 3 - Born Again & God's Love)
  'JHN_3': [
    {
      verse: 1,
      textAm: 'ከፈሪሳውያንም ወገን የአይሁድ አለቃ የሆነ ኒቆዲሞስ የሚባለው አንድ ሰው ነበረ፤',
      textEn: 'Now there was a man of the Pharisees named Nicodemus, a ruler of the Jews.',
      textOriginal: 'Ἦν δὲ ἄνθρωπος ἐκ τῶν Φαρισαίων, Νικόδημος ὄνομα αὐτῷ, ἄρχων τῶν Ἰουδαίων·',
      transliteration: "Ēn de anthrōpos ek tōn Pharisaiōn, Nikodēmos onoma autō, archōn tōn Ioudaiōn;"
    },
    {
      verse: 3,
      textAm: 'ኢየሱስም መልሶ፦ «እውነት እውነት እልሃለሁ፥ ሰው ዳግመኛ ካልተወለደ በቀር የእግዚአብሔርን መንግሥት ሊያይ አይችልም» አለው።',
      textEn: 'Jesus answered him, "Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God."',
      textOriginal: 'ἀπεκρίθη Ἰησοῦς καὶ εἶπεν αὐτῷ· Ἀμὴν ἀμὴν λέγω σοι, ἐὰν μή τις γεννηθῇ ἄνωθεν, οὐ δύναται ἰδεῖν τὴν βασιλείαν τοῦ θεοῦ.',
      transliteration: "apekrithē Iēsous kai eipen autō: Amēn amēn legō soi, ean mē tis gennēthē anōthen, ou dynatai idein tēn basileian tou theou.",
      strongsWords: [
        { strongsNumber: 'G509', wordOriginal: 'ἄνωθεν', transliteration: 'anōthen', lemma: 'ἄνωθεν', partOfSpeech: 'adverb', definition: 'from above, anew, again born', amharicMeaning: 'ከላይ / ዳግመኛ' },
        { strongsNumber: 'G932', wordOriginal: 'βασιλείαν', transliteration: 'basileian', lemma: 'βασιλεία', partOfSpeech: 'noun accusative feminine', definition: 'kingdom, sovereign rule of God', amharicMeaning: 'የእግዚአብሔር መንግሥት' }
      ]
    },
    {
      verse: 5,
      textAm: 'ኢየሱስም መለሰ፥ እንዲህ ሲል፦ «እውነት እውነት እልሃለሁ፥ ሰው ከውኃና ከመንፈስ ካልተወለደ በቀር ወደ እግዚአብሔር መንግሥት ሊገባ አይችልም።',
      textEn: 'Jesus answered, "Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God."',
      textOriginal: 'ἀπεκρίθη Ἰησοῦς· Ἀμὴν ἀμὴν λέγω σοι, ἐὰν μή τις γεννηθῇ ἐξ ὕδατος καὶ πνεύματος, οὐ δύναται εἰσελθεῖν εἰς τὴν βασιλείαν τοῦ θεοῦ.',
      transliteration: "apekrithē Iēsous: Amēn amēn legō soi, ean mē tis gennēthē ex hydatos kai pneumatos, ou dynatai eiselthein eis tēn basileian tou theou."
    },
    {
      verse: 16,
      textAm: 'በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና።',
      textEn: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
      textOriginal: 'Οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.',
      transliteration: "Houtōs gar ēgapēsen ho theos ton kosmon, hōste ton huion ton monogenē edōken, hina pas ho pisteuōn eis auton mē apolētai all' echē zōēn aiōnion.",
      strongsWords: [
        { strongsNumber: 'G25', wordOriginal: 'ἠγάπησεν', transliteration: 'ēgapēsen', lemma: 'ἀγαπάω', partOfSpeech: 'verb aorist active', definition: 'loved with divine self-giving devotion', amharicMeaning: 'ወደደ / አፈቀረ' },
        { strongsNumber: 'G3439', wordOriginal: 'μονογενῆ', transliteration: 'monogenē', lemma: 'μονογενής', partOfSpeech: 'adjective accusative masculine', definition: 'only-begotten, unique, beloved', amharicMeaning: 'አንድያ ልጁን' },
        { strongsNumber: 'G4100', wordOriginal: 'πιστεύων', transliteration: 'pisteuōn', lemma: 'πιστεύω', partOfSpeech: 'participle present active', definition: 'believing, placing personal faith', amharicMeaning: 'የሚያምን' },
        { strongsNumber: 'G166', wordOriginal: 'αἰώνιον', transliteration: 'aiōnion', lemma: 'αἰώνιος', partOfSpeech: 'adjective accusative feminine', definition: 'eternal, everlasting, unending divine life', amharicMeaning: 'የዘላለም' }
      ]
    },
    {
      verse: 17,
      textAm: 'ዓለም በልጁ እንዲድን ነው እንጂ፥ በዓለም እንዲፈርድ እግዚአብሔር ልጁን ወደ ዓለም አልላከውምና።',
      textEn: 'For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.',
      textOriginal: 'οὐ γὰρ ἀπέστειλεν ὁ θεὸς τὸν υἱὸν εἰς τὸν κόσμον ἵνα κρίνῃ τὸν κόσμον, ἀλλ’ ἵνα σωθῇ ὁ κόσμος δι’ αὐτοῦ.',
      transliteration: "ou gar apesteilen ho theos ton huion eis ton kosmon hina krinē ton kosmon, all' hina sōthē ho kosmos di' autou."
    }
  ],

  // ዮሐንስ ወንጌል ምዕራፍ 14 (John 14 - The Way, Truth and Life, Holy Spirit Promised)
  'JHN_14': [
    {
      verse: 1,
      textAm: 'ልባችሁ አይታወክ፤ በእግዚአብሔር እመኑ፥ በእኔም ደግሞ እመኑ።',
      textEn: 'Let not your hearts be troubled. Believe in God; believe also in me.',
      textOriginal: 'Μὴ ταρασσέσθω ὑμῶν ἡ καρδία· πιστεύετε εἰς τὸν θεόν, καὶ εἰς ἐμὲ πιστεύετε.',
      transliteration: "Mē tarassesthō hymōn hē kardia; pisteuete eis ton theon, kai eis eme pisteuete."
    },
    {
      verse: 2,
      textAm: 'በአባቴ ቤት ብዙ መኖሪያ አለ፤ እንዲህስ ባይሆን ባልኋችሁ ነበር፤ ስፍራ ላዘጋጅላችሁ እሄዳለሁና፤',
      textEn: 'In my Father’s house are many rooms. If it were not so, would I have told you that I go to prepare a place for you?',
      textOriginal: 'ἐν τῇ οἰκίᾳ τοῦ πατρός μου μοναὶ πολλαί εἰσιν· εἰ δὲ μή, εἶπον ἂν ὑμῖν ὅτι πορεύομαι ἑτοιμάσαι τόπον ὑμῖν;',
      transliteration: "en tē oikia tou patros mou monai pollai eisin; ei de mē, eipon an hymin hoti poreuomai hetoimasai topon hymin;"
    },
    {
      verse: 6,
      textAm: 'ኢየሱስም፦ «እኔ መንገድና እውነት ሕይወትም ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም።» አለው።',
      textEn: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me."',
      textOriginal: 'λέγει αὐτῷ ὁ Ἰησοῦς· Ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή· οὐδεὶς ἔρχεται πρὸς τὸν πατέρα εἰ μὴ δι’ ἐμοῦ.',
      transliteration: "legei autō ho Iēsous: Egō eimi hē hodos kai hē alētheia kai hē zōē; oudeis erchetai pros ton patera ei mē di' emou.",
      strongsWords: [
        { strongsNumber: 'G3598', wordOriginal: 'ὁδὸς', transliteration: 'hodos', lemma: 'ὁδός', partOfSpeech: 'noun nominative feminine', definition: 'the only way, highway, path to God', amharicMeaning: 'መንገድ' },
        { strongsNumber: 'G225', wordOriginal: 'ἀλήθεια', transliteration: 'alētheia', lemma: 'ἀλήθεια', partOfSpeech: 'noun nominative feminine', definition: 'the divine ultimate truth', amharicMeaning: 'እውነት' },
        { strongsNumber: 'G2222', wordOriginal: 'ζωή', transliteration: 'zōē', lemma: 'ζωή', partOfSpeech: 'noun nominative feminine', definition: 'the eternal self-existent life', amharicMeaning: 'ሕይወት' }
      ]
    },
    {
      verse: 16,
      textAm: 'እኔም አብን እለምናለሁ እርሱም ለዘላለም ከእናንተ ጋር እንዲኖር ሌላ አጽናኝ ይሰጣችኋል፤',
      textEn: 'And I will ask the Father, and he will give you another Helper, to be with you forever,',
      textOriginal: 'κἀγὼ ἐρωτήσω τὸν πατέρα καὶ ἄλλον παράκλητον δώσει ὑμῖν, ἵνα ᾖ μεθ’ ὑμῶν εἰς τὸν αἰῶνα,',
      transliteration: "kagō erōtēsō ton patera kai allon paraklēton dōsei hymin, hina ē meth' hymōn eis ton aiōna,",
      strongsWords: [
        { strongsNumber: 'G3875', wordOriginal: 'παράκλητον', transliteration: 'paraklēton', lemma: 'παράκλητος', partOfSpeech: 'noun accusative masculine', definition: 'Comforter, Advocate, Helper (Holy Spirit)', amharicMeaning: 'አጽናኝ (መንፈስ ቅዱስ)' }
      ]
    },
    {
      verse: 27,
      textAm: 'ሰላምን እተውላችኋለሁ፥ ሰላሜን እሰጣችኋለሁ፤ እኔ የምሰጣችሁ ዓለም እንደሚሰጥ አይደለም። ልባችሁ አይታወክ አይፍራም።',
      textEn: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
      textOriginal: 'Εἰρήνην ἀφίημι ὑμῖν, εἰρήνην τὴν ἐμὴν δίδωμι ὑμῖν· οὐ καθὼς ὁ κόσμος δίδωσιν ἐγὼ δίδωμι ὑμῖν. μὴ ταρασσέσθω ὑμῶν ἡ καρδία μηδὲ δειλιάτω.',
      transliteration: "Eirēnēn aphiēmi hymin, eirēnēn tēn emēn didōmi hymin; ou kathōs ho kosmos didōsin egō didōmi hymin."
    }
  ],

  // ማቴዎስ ወንጌል ምዕራፍ 5 (Matthew 5 - The Beatitudes & Sermon on the Mount)
  'MAT_5': [
    {
      verse: 1,
      textAm: 'ሕዝቡንም አይቶ ወደ ተራራ ወጣ፤ በተቀመጠም ጊዜ ደቀ መዛሙርቱ ወደ እርሱ ቀረቡ፤',
      textEn: 'Seeing the crowds, he went up on the mountain, and when he sat down, his disciples came to him.',
      textOriginal: 'Ἰδὼν δὲ τοὺς ὄχλους ἀνέβη εἰς τὸ ὄρος, καὶ καθίσαντος αὐτοῦ προσῆλθαν αὐτῷ οἱ μαθηταὶ αὐτοῦ·',
      transliteration: "Idōn de tous ochlous anebē eis to oros, kai kathisantos autou prosēlthan autō hoi mathētai autou;"
    },
    {
      verse: 3,
      textAm: '«በመንፈስ ድሆች የሆኑ ብፁዓን ናቸው፥ መንግሥተ ሰማያት የእነርሱ ናትና።',
      textEn: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
      textOriginal: 'Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.',
      transliteration: "Makarioi hoi ptōchoi tō pneumati, hoti autōn estin hē basileia tōn ouranōn.",
      strongsWords: [
        { strongsNumber: 'G3107', wordOriginal: 'Μακάριοι', transliteration: 'Makarioi', lemma: 'μακάριος', partOfSpeech: 'adjective nominative plural', definition: 'blessed, spiritually fortunate, prosperous in God', amharicMeaning: 'ብፁዓን / የተባረኩ' }
      ]
    },
    {
      verse: 4,
      textAm: 'የሚያዝኑ ብፁዓን ናቸው፥ መጽናናትን ያገኛሉና።',
      textEn: 'Blessed are those who mourn, for they shall be comforted.',
      textOriginal: 'μακάριοι οἱ πενθοῦντες, ὅτι αὐτοὶ παρακληθήσονται.',
      transliteration: "makarioi hoi penthountes, hoti autoi paraklēthēsontai."
    },
    {
      verse: 5,
      textAm: 'የዋሆች ብፁዓን ናቸው፥ ምድርን ይወርሳሉና።',
      textEn: 'Blessed are the meek, for they shall inherit the earth.',
      textOriginal: 'μακάριοι οἱ πραεῖς, ὅτι αὐτοὶ κληρονομήσουσιν τὴν γῆν.',
      transliteration: "makarioi hoi praeis, hoti autoi klēronomēsousin tēn gēn."
    },
    {
      verse: 6,
      textAm: 'ጽድቅን የሚራቡና የሚጠሙ ብፁዓን ናቸው፥ ይጠግባሉና።',
      textEn: 'Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.',
      textOriginal: 'μακάριοι οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην, ὅτι αὐτοὶ χορτασθήσονται.',
      transliteration: "makarioi hoi peinōntes kai dipsōntes tēn dikaiosynēn, hoti autoi chortasthēsontai."
    },
    {
      verse: 7,
      textAm: 'ምሕረትን የሚያደርጉ ብፁዓን ናቸው፥ ምሕረትን ያገኛሉና።',
      textEn: 'Blessed are the merciful, for they shall receive mercy.',
      textOriginal: 'μακάριοι οἱ ἐλεήμονες, ὅτι αὐτοὶ ἐλεηθήσονται.',
      transliteration: "makarioi hoi eleēmones, hoti autoi eleēthēsontai."
    },
    {
      verse: 8,
      textAm: 'ልበ ንጹሖች ብፁዓን ናቸው፥ እግዚአብሔርን ያዩታልና።',
      textEn: 'Blessed are the pure in heart, for they shall see God.',
      textOriginal: 'μακάριοι οἱ καθαροὶ τῇ καρδίᾳ, ὅτι αὐτοὶ τὸν θεὸν ὄψονται.',
      transliteration: "makarioi hoi katharoi tē kardia, hoti autoi ton theon opsontai."
    },
    {
      verse: 14,
      textAm: 'እናንተ የዓለም ብርሃን ናችሁ። በተራራ ላይ ያለች ከተማ ልትሰወር አይቻላትም።',
      textEn: 'You are the light of the world. A city set on a hill cannot be hidden.',
      textOriginal: 'Ὑμεῖς ἐστε τὸ φῶς τοῦ κόσμου. οὐ δύναται πόλις κρυβῆναι ἐπάνω ὄρους κειμένη·',
      transliteration: "Hymeis este to phōs tou kosmou. ou dynatai polis krybēnai epanō orous keimenē;"
    },
    {
      verse: 16,
      textAm: 'መልካሙን ሥራችሁን አይተው በሰማያት ያለውን አባታችሁን እንዲያከብሩ ብርሃናችሁ እንዲሁ በሰው ፊት ይብራ።',
      textEn: 'In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
      textOriginal: 'οὕτως λαμψάτω τὸ φῶς ὑμῶν ἔμπροσθεν τῶν ἀνθρώπων, ὅπως ἴδωσιν ὑμῶν τὰ καλὰ ἔργα καὶ δοξάσωσιν τὸν πατέρα ὑμῶν τὸν ἐν τοῖς οὐρανοῖς.',
      transliteration: "houtōs lampsatō to phōs hymōn emprosthen tōn anthrōpōn, hopōs idōsin hymōn ta kala erga kai doxasōsin ton patera hymōn ton en tois ouranois."
    }
  ],

  // ማቴዎስ ወንጌል ምዕራፍ 28 (Matthew 28 - Resurrection & Great Commission)
  'MAT_28': [
    {
      verse: 1,
      textAm: 'በሰንበትም መጨረሻ በመጀመሪያው ቀን ሲነጋ ማርያም መግደላዊትና ሁለተኛይቱ ማርያም መቃብሩን ሊያዩ መጡ።',
      textEn: 'Now after the Sabbath, toward the dawn of the first day of the week, Mary Magdalene and the other Mary went to see the tomb.',
      textOriginal: 'Ὀψὲ δὲ σαββάτων, τῇ ἐπιφωσκούσῃ εἰς μίαν σαββάτων, ἦλθεν Μαριὰμ ἡ Μαγδαληνὴ καὶ ἡ ἄλλη Μαρία θεωρῆσαι τὸν τάφον.',
      transliteration: "Opse de sabbatōn, tē epiphōskousē eis mian sabbatōn, ēlthen Mariam hē Magdalēnē kai hē allē Maria theōrēsai ton taphon."
    },
    {
      verse: 5,
      textAm: 'መልአኩም መልሶ ሴቶቹን አላቸው፦ «እናንተስ አትፍሩ፤ የተሰቀለውን ኢየሱስን እንድትፈልጉ አውቃለሁና፤',
      textEn: 'But the angel said to the women, "Do not be afraid, for I know that you seek Jesus who was crucified.',
      textOriginal: 'ἀποκριθεὶς δὲ ὁ ἄγγελος εἶπεν ταῖς γυναιξίν· Μὴ φοβεῖσθε ὑμεῖς, οἶδα γὰρ ὅτι Ἰησοῦν τὸν ἐσταυρωμένον ζητεῖτε·',
      transliteration: "apokritheis de ho angelos eipen tais gynaixin: Mē phobeisthe hymeis, oida gar hoti Iēsoun ton estaurōmenon zēteite;"
    },
    {
      verse: 6,
      textAm: 'እንደ ተናገረ ተነሥቶአልና በዚህ የለም፤ የተኛበትን ስፍራ ኑና እዩ።',
      textEn: 'He is not here, for he has risen, as he said. Come, see the place where he lay.',
      textOriginal: 'οὐκ ἔστιν ὧδε, ἠγέρθη γὰρ καθὼς εἶπεν· δεῦτε ἴδετε τὸν τόπον ὅπου ἔκειτο.',
      transliteration: "ouk estin hōde, ēgerthē gar kathōs eipen; deute idete ton topon hopou ekeito.",
      strongsWords: [
        { strongsNumber: 'G1453', wordOriginal: 'ἠγέρθη', transliteration: 'ēgerthē', lemma: 'ἐγείρω', partOfSpeech: 'verb aorist passive', definition: 'he was raised, has risen from the dead', amharicMeaning: 'ተነሥቶአል (ከሙታን ተነስቷል)' }
      ]
    },
    {
      verse: 18,
      textAm: 'ኢየሱስም ቀረበና እንዲህ ብሎ ተናገራቸው፦ «ሥልጣን ሁሉ በሰማይና በምድር ተሰጠኝ።',
      textEn: 'And Jesus came and said to them, "All authority in heaven and on earth has been given to me.',
      textOriginal: 'καὶ προσελθὼν ὁ Ἰησοῦς ἐλάλησεν αὐτοῖς λέγων· Ἐδόθη μοι πᾶσα ἐξουσία ἐν οὐρανῷ καὶ ἐπὶ γῆς.',
      transliteration: "kai proselthōn ho Iēsous elalēsen autois legōn: Edothē moi pasa exousia en ouranō kai epi gēs."
    },
    {
      verse: 19,
      textAm: 'እንግዲህ ሂዱና አሕዛብን ሁሉ በአብ በወልድና በመንፈስ ቅዱስ ስም እያጠመቃችኋቸው፥',
      textEn: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
      textOriginal: 'πορευθέντες οὖν μαθητεύσατε πάντα τὰ ἔθνη, βαπτίζοντες αὐτοὺς εἰς τὸ ὄνομα τοῦ πατρὸς καὶ τοῦ υἱοῦ καὶ τοῦ ἁγίου πνεύματος,',
      transliteration: "poreuthentes oun mathēteusate panta ta ethnē, baptizontes autous eis to onoma tou patros kai tou huiou kai tou hagiou pneumatos,",
      strongsWords: [
        { strongsNumber: 'G3100', wordOriginal: 'μαθητεύσατε', transliteration: 'mathēteusate', lemma: 'μαθητεύω', partOfSpeech: 'verb aorist active imperative', definition: 'make disciples, train followers of Christ', amharicMeaning: 'ደቀ መዛሙርት አድርጉ' },
        { strongsNumber: 'G907', wordOriginal: 'βαπτίζοντες', transliteration: 'baptizontes', lemma: 'βαπτίζω', partOfSpeech: 'participle present active', definition: 'baptizing, immersing in name of Triune God', amharicMeaning: 'እያጠመቃችኋቸው' }
      ]
    },
    {
      verse: 20,
      textAm: 'ያዘዝኋችሁንም ሁሉ እንዲጠብቁ እያስተማራችኋቸው ደቀ መዛሙርት አድርጓቸው፤ እነሆም እኔ እስከ ዓለም ፍጻሜ ድረስ ሁልጊዜ ከእናንተ ጋር ነኝ።»',
      textEn: 'teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
      textOriginal: 'διδάσκοντες αὐτοὺς τηρεῖν πάντα ὅσα ἐνετειλάμην ὑμῖን· καὶ ἰδοὺ ἐγὼ μεθ’ ὑμῶν εἰμι πάσας τὰς ἡμέρας ἕως τῆς συντελείας τοῦ αἰῶνος.',
      transliteration: "didaskontes autous tērein panta hosa eneteilamēn hymin; kai idou egō meth' hymōn eimi pasas tas hēmeras heōs tēs synteleias tou aiōnos."
    }
  ],

  // የሐዋርያት ሥራ ምዕራፍ 2 (Acts 2 - Pentecost & The Birth of the Church)
  'ACT_2': [
    {
      verse: 1,
      textAm: 'በዓለ ኀምሳ የተባለውም ቀን በደረሰ ጊዜ፥ ሁሉም በአንድ ልብ ሆነው አብረው ሳሉ፥',
      textEn: 'When the day of Pentecost arrived, they were all together in one place.',
      textOriginal: 'Καὶ ἐν τῷ συμπληροῦσθαι τὴν ἡμέραν τῆς πεντηκοστῆς ἦσαν πάντες ὁμοῦ ἐπὶ τὸ αὐτό.',
      transliteration: "Kai en tō symplērousthai tēn hēmeran tēs pentēkostēs ēsan pantes homou epi to auto."
    },
    {
      verse: 2,
      textAm: 'ድንገት እንደሚነጥቅ ዓውሎ ነፋስ ድምፅ ከሰማይ መጣ፥ ተቀምጠው የነበሩበትንም ቤት ሁሉ ሞላው።',
      textEn: 'And suddenly there came from heaven a sound like a mighty rushing wind, and it filled the entire house where they were sitting.',
      textOriginal: 'καὶ ἐγένετο ἄφνω ἐκ τοῦ οὐρανοῦ ἦχος ὥσπερ φερομένης πνοῆς βιαίας καὶ ἐπλήρωσεν ὅλον τὸν οἶκον οὗ ἦσαν καθήμενοι,',
      transliteration: "kai egeneto aphnō ek tou ouranou ēchos hōsper pheromenēs pnoēs biaias..."
    },
    {
      verse: 4,
      textAm: 'በሁሉም መንፈስ ቅዱስ ሞላባቸው፥ መንፈስም ይናገሩ ዘንድ እንደ ሰጣቸው በሌላ ልሳኖች ይናገሩ ጀመር።',
      textEn: 'And they were all filled with the Holy Spirit and began to speak in other tongues as the Spirit gave them utterance.',
      textOriginal: 'καὶ ἐπλήσθησαν πάντες πνεύματος ἁγίου, καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις καθὼς τὸ πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς.',
      transliteration: "kai eplēsthēsan pantes pneumatos hagiou, kai ērxanto lalein heterais glōssais..."
    },
    {
      verse: 38,
      textAm: 'ጴጥሮስም፦ «ንስሐ ግቡ፥ ኃጢአታችሁም ይሰረይ ዘንድ እያንዳንዳችሁ በኢየሱስ ክርስቶስ ስም ተጠመቁ፤ የመንፈስ ቅዱስንም ስጦታ ትቀበላላችሁ።',
      textEn: 'And Peter said to them, "Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.',
      textOriginal: 'Πέτρος δὲ πρὸς αὐτούς· Μετανοήσατε, καὶ βαπτισθήτω ἕκαστος ὑμῶν ἐπὶ τῷ ὀνόματι Ἰησοῦ Χριστοῦ εἰς ἄφεσιν τῶν ἁμαρτιῶν ὑμῶν, καὶ λήμψεσθε τὴν δωρεὰν τοῦ ἁγίου πνεύματος.',
      transliteration: "Petros de pros autous: Metanoēsate, kai baptisthētō hekastos hymōn epi tō onomati Iēsou Christou...",
      strongsWords: [
        { strongsNumber: 'G3340', wordOriginal: 'Μετανοήσατε', transliteration: 'Metanoēsate', lemma: 'μετανοέω', partOfSpeech: 'verb aorist active imperative', definition: 'repent, change mind, turn from sin to God', amharicMeaning: 'ንስሐ ግቡ' },
        { strongsNumber: 'G859', wordOriginal: 'ἄφεσιν', transliteration: 'aphesin', lemma: 'ἄφεσις', partOfSpeech: 'noun accusative feminine', definition: 'forgiveness, pardon, release from sin debt', amharicMeaning: 'የኃጢአት ስርየት' }
      ]
    }
  ]
};
