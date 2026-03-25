import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  // Si no hay credenciales, no fallar silenciosamente
  if (!process.env.FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID === 'tu-project-id') {
    return NextResponse.json({ success: false, reason: 'Firebase not configured' });
  }

  try {
    const { db } = await import('@/lib/firebase-admin');

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'Unknown IP';
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
    const userAgent = request.headers.get('user-agent') || 'Unknown Agent';

    await db.collection('visitors').add({
      ip,
      location: `${city}, ${country}`,
      userAgent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking visitor', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
