import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RouteTransitionLoader from '@/components/RouteTransitionLoader'
import { site } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'eHatod — Food, Padala & Pabili Delivery',
    template: '%s — eHatod',
  },
  description: site.description,
  applicationName: site.name,
  keywords: ['eHatod', 'delivery', 'food delivery', 'padala', 'pabili', 'Philippines', 'rider', 'merchant'],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'eHatod — Fast, fair, local delivery',
    description: site.description,
    url: site.url,
    locale: 'en_PH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eHatod — Fast, fair, local delivery',
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: '#FF6700',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <RouteTransitionLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
