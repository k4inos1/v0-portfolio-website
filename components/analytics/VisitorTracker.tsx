'use client';

import { useEffect, useRef } from 'react';

export function VisitorTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    // Evita doble ejecución en React Strict Mode
    if (tracked.current) return;
    
    // Verificamos si ya registramos la visita en esta misma sesión del navegador
    if (!sessionStorage.getItem('portfolioVisitorTracked')) {
      tracked.current = true;
      
      fetch('/api/track', { method: 'POST' })
        .then(res => {
          if (res.ok) {
            sessionStorage.setItem('portfolioVisitorTracked', 'true');
          }
        })
        .catch(err => console.error('Tracker error:', err));
    }
  }, []);

  // Componente inisible, solo lógica
  return null;
}
