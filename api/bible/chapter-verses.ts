import { GoogleGenAI } from '@google/genai';

// የተረጋገጡ እና ንጹህ የአማርኛ መጽሐፍ ቅዱስ ምዕራፎች (እዚህ ጋር ተጨማሪዎችን ማስፋት ይቻላል)
const LOCAL_BIBLE_DATA: Record<string, string> = {
  "የማቴዎስ ወንጌል_1": "1. የዳዊት ልጅ የአብርሃም ልጅ የኢየሱስ ክርስቶስ ትውልድ መጽሐፍ።\n2. አብርሃም ይስሐቅን ወለደ፤ ይስሐቅም ያዕቆብን ወለደ፤ ያዕቆብም ይሁዳንና ወንድሞቹን ወለደ፤\n3. ይሁዳም ከታማር ፋሬስንና ዘራን ወለደ፤ ፋሬስም ኤስሮምን ወለደ፤ ኤስሮምም አራምን ወለደ፤\n4. አራምም አሚናዳብን ወለደ፤ አሚናዳብም ነአሶንን ወለደ፤ ነአሶምም ሰልሞንን ወለደ፤\n5. ሰልሞንም ከራማ ቦዔዝን ወለደ፤ ቦዔዝም ከሩት ኦቤድን ወለደ፤ ኦቤድም እሴይን ወለደ፤\n6. እሴይም ንጉሥ ዳዊትን ወለደ። ዳዊትም ከዩሪያ ሚስት ሰሎሞንን ወለደ፤",
};

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

    const key = `${book}_${chapter}`;

    // 1. መጀመሪያ ከተዘጋጀው ንጹህ ዳታ ፈልጎ ያመጣል (ቁጥሮች ፈጽሞ አይቀላቀሉም)
    if (LOCAL_BIBLE_DATA[key]) {
      return res.status(200).json({
        success: true,
        book,
        chapter,
        content: LOCAL_BIBLE_DATA[key]
      });
    }

    // 2. በዳታው ውስጥ ገና ያልተጨመረ ምዕራፍ ሲጠየቅ
    return res.status(200).json({
      success: true,
      book,
      chapter,
      content: `ይህ ${book} ምዕራፍ ${chapter} በቅርቡ በዳታ ቤዙ ይጨመራል።`
    });

  } catch (error: any) {
    console.error('API Error Details:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      details: error.message || String(error) 
    });
  }
}
