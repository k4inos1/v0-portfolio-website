import * as admin from 'firebase-admin';

function getPrivateKey(): string {
  const key = process.env.FIREBASE_PRIVATE_KEY ?? '';
  // Vercel y .env.local a veces escapan los saltos de línea como \\n en vez de \n
  // Esta lógica cubre ambos casos
  if (key.includes('\\n')) {
    return key.replace(/\\n/g, '\n');
  }
  return key;
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: getPrivateKey(),
      }),
    });
  } catch (error) {
    console.error('Firebase Admin initialization error', error);
  }
}

export const db = admin.firestore();
