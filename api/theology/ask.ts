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

function buildFallbackTheologyAnswer(question: string, context?: string): string {
  return `### 📖 መጽሐፍ ቅዱሳዊና ሥነ-መለኮታዊ ምላሽ

**ለቀረበው ጥያቄ**: "${question}"

በወንጌላዊ ፕሮቴስታንት አስተምህሮ እና በቅዱሳት መጻሕፍት (Sola Scriptura) መሠረት የሚከተሉት መሠረታዊ የወንጌል እውነቶች ይብራራሉ፡

1. **የእግዚአብሔር ቃል የበላይነት (2ኛ ጢሞቴዎስ 3:16-17)**
   - መጽሐፍ ቅዱስ ለእምነታችን፣ ለኑሮአችንና ለመንፈሳዊ ጉዞአችን ብቸኛው ያልተበረዘ መመሪያ ነው። ለሁሉም ጥያቄዎች የመጨረሻው ዳኛ የእግዚአብሔር ቃል ነው።

2. **የክርስቶስ የማዳን ሥራና ጸጋ (ኤፌሶን 2:8-9, ሮሜ 8:1)**
   - በኢየሱስ ክርስቶስ የማዳን ሥራና በደሙ ቤዛነት አማካኝነት ወደ አብ የምንቀርብበት ነጻ የጸጋ መንገድ ተከፍቶልናል። ክርስቶስ ብቸኛው አማላጅና መድኃኒት ነው (1ኛ ጢሞቴዎስ 2:5)።

3. **በመንፈስ ቅዱስ መመራትና ተግባራዊ ሕይወት (ገላትያ 5:22-25)**
   - አማኝ በጸሎት፣ በቃሉ ማሰላሰል እና በመንፈስ ቅዱስ ኅብረት የእግዚአብሔርን ፈቃድ እያወቀ በቅድስናና በፍቅር እንዲመላለስ ተጠርቷል።

${context ? `\n**የተጠቀሰው መጽሐፍ ቅዱሳዊ አውድ**: ${context}` : ''}

*ለተጨማሪ ማብራሪያና ጥልቅ ጥናት ተዛማጅ ክፍሎችን በቤሪያን የጥናት መጽሐፍ ቅዱስ ውስጥ ማንበብና ማሰላሰል ይችላሉ።*`;
}

export default async function handler(req: any, res: any) {
  // Support CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, currentContext } = req.body || {};
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'ጥያቄ አልተሰጠም (Question is required)' });
  }

  try {
    const ai = getGeminiClient();
    const systemPrompt = `You are the theology assistant for "Kal (ቃል) Holy Bible", an Evangelical Protestant Study Bible app.
Answer thoroughly in rich, articulate Amharic (Ethiopic script).
Ground all answers strictly in Biblical Protestant Theology (Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, Soli Deo Gloria).
Provide Scripture references (መጽሐፍ፣ ምዕራፍ፣ ቁጥር) and Greek/Hebrew original language insights where relevant.
Be pastoral, encouraging, sound in doctrine, and Christ-centered.`;

    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `${systemPrompt}\n\n${currentContext ? `Active Scripture Context: ${currentContext}\n\n` : ''}User Question: ${question}`
          }
        ]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
    });

    const answer = response.text || '';
    return res.status(200).json({ answer });
  } catch (err: any) {
    console.warn('Vercel serverless theology fallback triggered:', err?.message || err);
    const fallbackAnswer = buildFallbackTheologyAnswer(question, currentContext);
    return res.status(200).json({ answer: fallbackAnswer });
  }
}
