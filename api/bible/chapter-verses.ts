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
  // መረጃውን ከ Query Parameters መቀበል (ለ Vercel እና GET ጥያቄዎች ትክክለኛው መንገድ)
  const book = req.query.book as string;
  const chapter = req.query.chapter ? Number(req.query.chapter) : null;

  if (!book || !chapter) {
    return res.status(400).json({ error: 'መጽሐፍ እና ምዕራፍ መግባት አለባቸው' });
  }

  const key = `${book}_${chapter}`;
  const content = BIBLE_DATABASE[key] || null;

  return res.status(200).json({
    success: true,
    book,
    chapter,
    verses: content ? [{ verse: 1, text: content }] : [] // ዳታውን ለፊት ለፊት ክፍል (verses) እንዲመች ማድረግ
  });
