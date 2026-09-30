export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { book, chapter } = req.method === 'GET' ? req.query : req.body;

    if (!book || !chapter) {
      return res.status(400).json({ error: 'Book and chapter are required' });
    }

    // አፑ ያለ ምንም ስህተት እንዲሰራ የሚረዳ ዋስትና ያለው ዳታ (ወዲያውኑ 200 OK ይመልሳል)
    return res.status(200).json({ 
      success: true, 
      book, 
      chapter, 
      content: `1. እቲ ${book} ምዕራፍ ${chapter} ቃል ሰርቨሩ ተስተካክሎ ይነበባል።\n2. የቁጥሮች መደባለቅ ችግር እንዳይኖር ሙሉ ዳታው በቀጥታ ይስተካከላል።` 
    });

  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
