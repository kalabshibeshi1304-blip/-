export default function handler(_req: any, res: any) {
  const hasKey = Boolean(process.env.GEMINI_API_KEY || process.env.API_KEY);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    status: 'ok',
    hasApiKey: hasKey,
    environment: 'vercel-serverless',
    timestamp: new Date().toISOString(),
  });
}
