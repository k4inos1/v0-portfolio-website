import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { VisitorTracker } from '@/components/analytics/VisitorTracker'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ricardo Sanhueza | Full Stack Developer',
  description: 'Desarrollador Full-Stack y especialista en Software Seguro. Diseño plataformas escalables con foco en ciberseguridad, calidad técnica y resultados medibles.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <VisitorTracker />
      </body>
    </html>
  )
}
