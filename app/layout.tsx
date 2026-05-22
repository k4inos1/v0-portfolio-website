import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { VisitorTracker } from '@/components/analytics/VisitorTracker'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Full Stack Developer specializing in building exceptional digital experiences. E-commerce, AI apps, SaaS tools, and more.',
  generator: 'v0.app',
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
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <VisitorTracker />
      </body>
    </html>
  )
}
