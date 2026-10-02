import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const book = (req.query.book as string || '').toUpperCase();
    const chapter = req.query.chapter ? Number(req.query.chapter) : null;

    if (!book || !chapter) {
      return res.status(400).json({ error: 'መጽሐፍ እና ምዕራፍ መግባት አለባቸው' });
    }

    // ከ src/data/seedChapters የሚመጣውን ዳታ በመጠቀም (ወይም በዚያው መልኩ የተዘጋጀ ቋሚ ዳታ)
    // ለጊዜው አፑ ከሚጠብቀው ቅርጸት ጋር እንዲጣጣም እናደርጋለን
    const key = `${book}_${chapter}`;

    // እዚህ ላይ ለናሙና የተወሰኑ ቁጥሮችን ማካተት እንችላለን፣ ወይም ትክክለኛውን የዘርፍ ዳታ ማገናኘት ይቻላል
    // አፑ የሚጠብቀው ቅርጸት: verses: [{ verse: number, text: string }]
    
    return res.status(200).json({
      success: true,
      book,
      chapter,
      verses: [
        { verse: 1, text: `የተመረጠው መጽሐፍ (${book}) ምዕራፍ ${chapter} ንባብ እዚህ ይታያል።` }
      ]
    });

  } catch (error: any) {
    console.error('API Error Details:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      details: error.message || String(error)
    });
  }
}
