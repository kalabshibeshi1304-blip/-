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
  // 1. ከፊት ለፊት የሚመጣውን book (ለምሳሌ MAT, GEN) እና chapter መቀበል
  const book = (req.query.book as string || '').toUpperCase();
  const chapter = req.query.chapter ? Number(req.query.chapter) : null;

  if (!book || !chapter) {
    return res.status(400).json({ error: 'መጽሐፍ እና ምዕራፍ መግባት አለባቸው' });
  }

  // 2. ቁልፉን ከ book.id (MAT, GEN) እና chapter ጋር ማዛመድ
  const key = `${book}_${chapter}`;

  // 3. የዳታ መዝገብ (BIBLE_DATABASE) - መላውን መጽሐፍ ቅዱስ እዚህ ማካተት ይቻላል
  const BIBLE_DATABASE: Record<string, string> = {
    "MAT_1": "የኢየሱስ ክርስቶስ የትውልድ መጽሐፍ...",
    "ROM_8": "እንግዲህ አሁን በክርስቶስ ኢየሱስ ለተሉት...",
    "GEN_1": "በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።"
    // ሌሎች መጻሕፍትን በእነዚህ አጫጭር መለያዎች (IDs) እዚህ ማካተት ይቻላል
  };

  const content = BIBLE_DATABASE[key] || `የመረጡት መጽሐፍ (${book}) ምዕራፍ ${chapter} መረጃ ተዘጋጅቷል።`;

  return res.status(200).json({
    success: true,
    book,
    chapter,
    verses: [{ verse: 1, text: content }]
  });

} catch (error: any) {
  console.error('API Error Details:', error);
  return res.status(500).json({
    error: 'Internal Server Error',
    details: error.message || String(error)
  });
}
