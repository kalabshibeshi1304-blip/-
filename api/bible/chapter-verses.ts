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

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API Key is missing in Vercel Environment Variables' });
    }

    const prompt = `Strictly provide only the exact, authentic Amharic Bible verses for "${book}" Chapter "${chapter}". Do NOT mix verses from other books or chapters. Format them cleanly with verse numbers.`;

    // Fetch API በመጠቀም በቀጥታ ከ Gemini ጋር መገናኘት (라이ብረሪ ሳያስፈልግ)
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate content from Gemini API');
    }

    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return res.status(200).json({ 
      success: true, 
      book, 
      chapter, 
      content: textContent 
    });

  } catch (error: any) {
    console.error('API Error Details:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      details: error.message || String(error) 
    });
  }
}
