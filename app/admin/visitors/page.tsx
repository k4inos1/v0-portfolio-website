export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function VisitorsAdmin({
  searchParams,
}: {
  searchParams: { key?: string }
}) {
  // Guard: credenciales no configuradas
  if (!process.env.FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID === 'tu-project-id') {
    return (
      <div className="p-8 text-yellow-400 min-h-screen bg-black font-mono">
        ⚠️ Firebase no configurado. Añade las variables de entorno reales para activar el rastreador.
      </div>
    );
  }

  // Guard: contraseña admin
  if (searchParams.key !== process.env.ADMIN_PASSWORD) {
    return (
      <div className="p-8 text-red-500 min-h-screen bg-black font-mono">
        ❌ Acceso Denegado. Contraseña incorrecta o no proporcionada.
      </div>
    );
  }

  try {
    const { db } = await import('@/lib/firebase-admin');
    const snapshot = await db.collection('visitors').orderBy('timestamp', 'desc').limit(100).get();

    const visitors = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as { ip: string; location: string; userAgent: string; timestamp: string }),
    }));

    return (
      <div className="p-8 text-white min-h-screen bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-green-400 font-mono">🛰 Radar de Visitantes</h1>
          <p className="text-gray-500 mb-8 text-sm font-mono">Últimas 100 visitas registradas en Firebase.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-800 bg-black/50 shadow-2xl">
            <table className="min-w-full text-left">
              <thead className="bg-gray-900 border-b border-gray-800 text-xs uppercase text-gray-400 font-mono">
                <tr>
                  <th className="p-4">Fecha / Hora</th>
                  <th className="p-4">IP</th>
                  <th className="p-4">Ubicación</th>
                  <th className="p-4">Dispositivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-sm">
                {visitors.map((v) => (
                  <tr key={v.id} className="hover:bg-green-400/5 transition-colors">
                    <td className="p-4 whitespace-nowrap text-gray-300">{new Date(v.timestamp).toLocaleString()}</td>
                    <td className="p-4 font-mono text-green-400">{v.ip}</td>
                    <td className="p-4">{v.location}</td>
                    <td className="p-4 max-w-xs truncate text-gray-500" title={v.userAgent}>{v.userAgent}</td>
                  </tr>
                ))}
                {visitors.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">Sin visitas registradas todavía.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8 text-red-400 min-h-screen bg-black font-mono">
        Error conectando a Firebase: {String(error)}
      </div>
    );
  }
}
