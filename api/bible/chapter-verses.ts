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

    // 1. መጀመሪያ በ Seed Chapters ውስጥ ካለ ከዛው እንወስዳለን
    const seedKey = `${book}_${chapter}`;
    if (SEED_CHAPTERS && (SEED_CHAPTERS as any)[seedKey]) {
      return res.status(200).json({
        success: true,
        book,
        chapter,
        content: (SEED_CHAPTERS as any)[seedKey]
      });
    }

    // 2. በ Gemini ሲመነጭ ጥብቅ ትዕዛዝ መስጠት
    const ai = getGeminiClient();
    const modelName = 'gemini-1.5-flash';
    
    const prompt = `CRITICAL BIBLE ACCURACY RULE: You must output ONLY the exact, authentic Amharic Bible verses for "${book}" Chapter "${chapter}". Do NOT mix verses from other books (like Acts, Genesis, etc.). Ensure the text strictly belongs to ${book} chapter ${chapter}. Provide the verses cleanly numbered.`;

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
    console.error('API Error Details:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      details: error.message || String(error) 
    });
  }
}
