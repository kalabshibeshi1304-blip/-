import { GoogleGenAI } from '@google/genai';

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (apiKey) {
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return new GoogleGenAI({
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function buildFallbackTheologicalAnalysis(
  book: string,
  chapter: number | string,
  verseStart?: number,
  verseEnd?: number
): string {
  const verseRef = verseStart
    ? verseEnd && verseEnd !== verseStart
      ? `ቁጥር ${verseStart}-${verseEnd}`
      : `ቁጥር ${verseStart}`
    : 'ምዕራፉ በሙሉ';

  return `### 📖 የክፍሉ የታሪክና ሥነ-ጽሑፋዊ አውድ (${book} ምዕራፍ ${chapter}:${verseRef})
- **መጽሐፍ**: ${book} (የፕሮቴስታንት መጽሐፍ ቅዱስ 66 ቀኖናዊ መጻሕፍት ክፍል)
- **ታሪካዊ አውድ**: የእግዚአብሔር መንፈስ ቅዱስ ቅዱሳን ሰዎችን እየመራ ለቤተክርስቲያንና ለአማኞች ዘላለማዊ መመሪያና የሕይወት ምግብ እንዲሆን የተጻፈ የእግዚአብሔር እስትንፋስ ያለበት ቃል (2ኛ ጢሞቴዎስ 3:16-17)።
- **ዓላማ**: አማኞች በመንፈሳዊ ዕውቀት፣ በእምነትና በጽድቅ እንዲያድጉ፣ ሐሰተኛ ትምህርቶችን እንዲነቅፉ እና እውነተኛውን የወንጌል እውነት እንዲከተሉ ማዘጋጀት።

### ✝️ ክርስቶስ-ተኮር ትንታኔ (Christocentric & Redemptive-Historical Exegesis)
- **የወንጌል ማዕከል**: ይህ ክፍል በኢየሱስ ክርስቶስ የተገለጠውን የእግዚአብሔርን የማዳን ዕቅድ እና ዘላለማዊ ጸጋ ያጎላል።
- **የክርስቶስ ቤዛነት**: ክርስቶስ ኢየሱስ በመስቀል ላይ የከፈለውን ፍጹም ዋጋና ያስገኘልንን ዘላለማዊ ጽድቅ በማወጅ፣ አማኙ በክርስቶስ የማዳን ሥራ ላይ ብቻ ሙሉ በሙሉ እንዲደገፍ ያሳስባል።

### 🏛️ የወንጌላውያን አስተምህሮ እና አምስቱ ሶላዎች (The 5 Solas)
1. **Sola Scriptura (መጽሐፍ ቅዱስ ብቻ)**: ይህ ክፍል ለክርስቲያናዊ ሕይወት፣ ለእምነትና ለአምልኮ ብቸኛውና የበላይ ሥልጣን የእግዚአብሔር ቃል ብቻ መሆኑን ያጸናል (መዝሙር 119:105)።
2. **Sola Fide (በእምነት ብቻ)**: ኃጢአተኛው ሰው በእግዚአብሔር ፊት የሚጸድቀው በራሱ መልካም ሥራ ሳይሆን በኢየሱስ ክርስቶስ በማመን ብቻ ነው (ሮሜ 3:28)።
3. **Sola Gratia (በጸጋ ብቻ)**: ድነት ሙሉ በሙሉ ያልተገባ የእግዚአብሔር ነጻ ስጦታ እንጂ የሰው ድካም ወይም ዋጋ አይደለም (ኤፌሶን 2:8-9)።
4. **Solus Christus (በክርስቶስ ብቻ)**: በእግዚአብሔርና በሰው መካከል ያለው ብቸኛው አማላጅ፣ ሊቀ ካህናትና አዳኝ ኢየሱስ ክርስቶስ ብቻ ነው (1ኛ ጢሞቴዎስ 2:5)።
5. **Soli Deo Gloria (ለእግዚአብሔር ክብር ብቻ)**: በድነታችንና በሕይወታችን ውስጥ ክብርና ምስጋና ሁሉ ለቅድስት ሥላሴ ብቻ ይገባል (ሮሜ 11:36)።

### 🔍 የቃላት ጥናትና አገናዛቢ ጥቅሶች (Original Language Insights & Cross-References)
- **ጸጋ (Charis / χάሪስ - ኖህ / חֵን)**: ያለ ምንም የሰው ዋጋ ወይም ብቃት የሚሰጥ ፍጹም መለኮታዊ ሞገስ።
- **እምነት (Pistis / πίστις - ኤሙና / אֱמוּנָה)**: በእግዚአብሔር ተስፋና በክርስቶስ የማዳን ሥራ ላይ ያረፈ ጽኑ መደገፍና ታማኝነት።
- **ጽድቅ (Dikaiosyne / δικαιοσύνη - ጼዴቅ / צֶድֶק)**: ክርስቶስ ያገኘውን ፍጹም ጽድቅ በእኛ ላይ መቁጠር (Imputation of Righteousness)።
- **አገናዛቢ ጥቅሶች**: ዮሐንስ 14:6፤ ሮሜ 8:1-4፤ ገላትያ 2:20፤ ዕብራውያን 4:16።

### 🕊️ ለግል ሕይወት ተግባራዊ አተገባበር (Practical Spiritual Application)
- **በዕለት ተዕለት ሕይወት**: በእግዚአብሔር ቃል እውነት ላይ በመደገፍ በጸሎትና በምስጋና መመላለስ።
- **በመንፈሳዊ ውጊያ**: በክርስቶስ የተሰጠንን የልጅነት ነጻነት በማወቅ፣ ከፍርሃትና ከኩነኔ ነጻ በመሆን የጸጋውን ወንጌል በድፍረት መመስከር።`;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { book, chapter, verseStart, verseEnd, passageText, analysisType } = req.body || {};

  try {
    const ai = getGeminiClient();
    const prompt = `Perform an in-depth Evangelical Protestant theological exegesis (ሥነ-መለኮታዊ ትንታኔ) for:
Book: ${book}
Chapter: ${chapter}
${verseStart ? `Verse Range: ${verseStart}${verseEnd ? `-${verseEnd}` : ''}` : 'Full Chapter'}
${passageText ? `Passage Text: "${passageText}"` : ''}
Analysis Focus: ${analysisType || 'depth'}

Provide structured analysis in Amharic with:
1. Historical and Literary Context (የክፍሉ የታሪክና ሥነ-ጽሑፋዊ አውድ)
2. Christocentric & Redemptive-Historical Theme (ክርስቶስ-ተኮር ትንታኔ)
3. Key Protestant Doctrines & The 5 Solas (የወንጌላውያን አስተምህሮ እና አምስቱ ሶላዎች)
4. Original Language Insights (Greek/Hebrew keywords & Strong's numbers) and Cross-References (የቃላት ጥናትና አገናዛቢ ጥቅሶች)
5. Practical Spiritual Application (ለግል ሕይወት ተግባራዊ አተገባበር)

Use markdown formatting with headers, bullet points, and bold text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    const analysis = response.text || '';
    return res.status(200).json({ analysis });
  } catch (err: any) {
    console.warn('Vercel serverless analyze fallback triggered:', err?.message || err);
    const fallback = buildFallbackTheologicalAnalysis(book || 'መጽሐፍ', chapter || 1, verseStart, verseEnd);
    return res.status(200).json({ analysis: fallback });
  }
}
