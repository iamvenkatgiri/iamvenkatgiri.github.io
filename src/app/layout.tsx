import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio Website',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
