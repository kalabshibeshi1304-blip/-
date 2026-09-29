import { GoogleGenAI } from '@google/genai';
import { PROTESTANT_BOOKS } from '../../src/data/booksData';
import { getExpectedVerseCount } from '../../src/utils/verseCounts';
import { SEED_CHAPTERS } from '../../src/data/seedChapters';

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (apiKey) {
    return new GoogleGenAI({ apiKey });
  }
  return new GoogleGenAI({ apiKey: 'dummy-key' });
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { book, chapter } = req.method === 'GET' ? req.query : req.body;

    if (!book || !chapter) {
      return res.status(400).json({ error: 'Book and chapter are required' });
    }

    const ai = getGeminiClient();
    const modelName = 'gemini-3.7-flash';

    // ቁጥሮቹ እንዳይቀላቀሉ ጥብቅ ትዕዛዝ የሚሰጠው ፕራምፕት
    const prompt = `You are a precise Bible API. Provide ONLY the exact verses for ${book} chapter ${chapter} in Amharic. Do not mix with other chapters or books. Ensure the verse numbers match correctly.`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    return res.status(200).json({ 
      success: true, 
      book, 
      chapter, 
      content: response.text || '' 
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
