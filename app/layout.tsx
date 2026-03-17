import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Sans, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { VisitorTracker } from '@/components/analytics/VisitorTracker'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700']
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code',
  weight: ['400', '500', '600']
});

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
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
        <VisitorTracker />
      </body>
    </html>
  )
}
