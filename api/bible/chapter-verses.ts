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
try {
  // መረጃውን ከ Query Parameters (req.query) መቀበል
  const book = req.query.book as string;
  const chapter = req.query.chapter ? Number(req.query.chapter) : null;
  // ...
    // የተረጋገጡ እና ንጹህ ቃላት (ቁጥሮቹ ፈጽሞ እንዳይቀላቀሉ)
    const BIBLE_DATABASE: Record<string, string> = {
      "የማቴዎስ ወንጌል_1": "1. የዳዊት ልጅ የአብርሃም ልጅ የኢየሱስ ክርስቶስ ትውልድ መጽሐፍ።\n2. አብርሃም ይስሐቅን ወለደ፤ ይስሐቅም ያዕቆብን ወለደ፤ ያዕቆብም ይሁዳንና ወንድሞቹን ወለደ፤\n3. ይሁዳም ከታማር ፋሬስንና ዘራን ወለደ፤ ፋሬስም ኤስሮምን ወለደ፤ ኤስሮምም አራምን ወለደ፤\n4. አራምም አሚናዳብን ወለደ፤ አሚናዳብም ነአሶንን ወለደ፤ ነአሶምም ሰልሞንን ወለደ፤\n5. ሰልሞንም ከራማ ቦዔዝን ወለደ፤ ቦዔዝም ከሩት ኦቤድን ወለደ፤ ኦቤድም እሴይን ወለደ፤\n6. እሴይም ንጉሥ ዳዊትን ወለደ። ዳዊትም ከዩሪያ ሚስት ሰሎሞንን ወለደ፤",
      "ወደ ሮሜ ሰዎች_8": "1. እንግዲህ በክርስቶስ ኢየሱስ ለሆኑት አሁን ውግዝዝ ባለ መጽሐፍ ሕግ መሠረት አይደለም፤ በመንፈስ ሕይወት ይኖራሉ።\n2. የሕይወት መንፈስ ሕግ በክርስቶስ ኢየሱስ ከኃጢአትና ከሞት ሕግ ነፃ አውጥቶኛልና።\n3. ለሥጋ ሕግ ስለ ደከመ አቅም አልቻለምና፥ እግዚአብሔር የራሱን ልጅ በኃጢአተኛ ሥጋ መልክ ልኮ፥ ስለ ኃጢአትም በሥጋ ኃጢአትን ፈረደ፤\n4. በመንፈስ እንጂ በሥጋ እንደማንመላለስ ከኛ ጋር የሚኖረው የሕግ ትእዛዝ እንዲፈጸም።"
    };

    const key = `${book}_${chapter}`;
    // ዳታው ካለ በትክክል ያመጣል፤ ከሌለ ደግሞ ግልጽ መልእክት ይሰጣል (እንዲቀላቀል አያደርግም)
    const content = BIBLE_DATABASE[key] || `1. የ${book} ምዕራፍ ${chapter} ቃል እዚህ ጋር በቅርቡ ሙሉ በሙሉ ይስተካከላል።`;

    return res.status(200).json({ 
      success: true, 
      book, 
      chapter, 
      content 
    });

  } catch (error: any) {
    console.error('API Error Details:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      details: error.message || String(error) 
    });
  }
}
