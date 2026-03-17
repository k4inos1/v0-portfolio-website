import { db } from '@/lib/firebase-admin';

export const revalidate = 0; // Evita el cache para mostrar las visitas en tiempo real

export default async function VisitorsAdmin({
  searchParams,
}: {
  searchParams: { key?: string }
}) {
  // Autenticación simple mediante URL /admin/visitors?key=...
  if (searchParams.key !== process.env.ADMIN_PASSWORD) {
    return <div className="p-8 text-red-500 min-h-screen bg-black">Acceso Denegado. La contraseña es incorrecta o no ha sido proporcionada.</div>;
  }

  // Traemos los últimos 100 visitantes ordenados por fecha de llegada
  const snapshot = await db.collection('visitors').orderBy('timestamp', 'desc').limit(100).get();
  
  const visitors = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return (
    <div className="p-8 text-white min-h-screen bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 font-heading text-primary">Radar de Visitantes (Últimos 100)</h1>
        
        <div className="overflow-x-auto rounded-xl border border-gray-800 bg-black/50 shadow-2xl">
          <table className="min-w-full text-left">
            <thead className="bg-gray-900 border-b border-gray-800 text-sm uppercase text-gray-400 font-mono">
              <tr>
                <th className="p-4">Fecha / Hora</th>
                <th className="p-4">IP</th>
                <th className="p-4">Ubicación</th>
                <th className="p-4">Dispositivo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {visitors.map((v: any) => (
                <tr key={v.id} className="hover:bg-primary/10 transition-colors">
                  <td className="p-4 whitespace-nowrap">{new Date(v.timestamp).toLocaleString()}</td>
                  <td className="p-4 font-mono text-primary/80">{v.ip}</td>
                  <td className="p-4">{v.location}</td>
                  <td className="p-4 max-w-xs truncate text-gray-400" title={v.userAgent}>{v.userAgent}</td>
                </tr>
              ))}
              {visitors.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">Sin visitas registradas en la base de datos de Firebase.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
