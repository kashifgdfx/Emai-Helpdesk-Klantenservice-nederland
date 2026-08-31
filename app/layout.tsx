import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { Phone } from 'lucide-react'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'E-mail Werkt Niet? Hulp & Ondersteuning Nederland',
  description: 'Werkt uw e-mail niet? Lees oplossingen voor e-mailproblemen, inloggen, wachtwoorden en berichten ontvangen met handige hulp en ondersteuning in Nederland.',
  verification: {
    google: 'Pl6fgcxV9MTphj6UBbMNfEIx0FzZnbm6pI9lQ3qaQig',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f8f5',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Floating Right-Side Call Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="tel:+31202254839"
            className="flex items-center gap-2.5 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-2xl transition-transform hover:scale-105 hover:bg-blue-700"
            aria-label="Bel klantenservice"
          >
            <Phone size={18} />
            <span>+31-20-225-4839</span>
          </a>
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}