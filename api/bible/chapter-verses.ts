import { GoogleGenAI } from '@google/genai';
import { PROTESTANT_BOOKS } from '../../src/data/booksData'; // እንደ ፎልደር አወቃቀርዎ ትክክለኛውን ፋይል ስም ያስተካክሉ
import { getExpectedVerseCount } from '../../src/utils/verseCounts'; 
import { SEED_CHAPTERS } from '../../src/data/seedChapters'; 

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
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
    apiKey: 'dummy-key',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405.json({ error: 'Method Not Allowed' }));
  }

  try {
    const { book, chapter } = req.method === 'GET' ? req.query : req.body;

    if (!book || !chapter) {
      return res.status(400).json({ error: 'Book and chapter are required' });
    }

    const ai = getGeminiClient();
    const modelName = 'gemini-2.5-flash';

    // እዚህ ጋር የ AI ጥያቄ አሰራር ሎጂኩ ይቀጥላል
    const prompt = `Provide the Bible verses for ${book} chapter ${chapter} in Amharic.`;
    
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
