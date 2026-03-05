import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { HtmlLangSetter } from '@/components/HtmlLangSetter'

export const metadata: Metadata = {
  title: 'ACCENT | Prémiový Branding & AI Automatizace v Praze',
  description: 'Prémiový branding a AI automatizace pro moderní podniky v Praze. Získejte profesionální design, chytrou automatizaci a více klientů během dnů, ne týdnů.',
  keywords: 'branding, AI automatizace, web design, Praha, podnikání, marketing, automatizace, chatbot',
  authors: [{ name: 'ACCENT' }],
  creator: 'ACCENT',
  publisher: 'ACCENT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://accent.agency'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://accent.agency',
    title: 'ACCENT | Premium Branding & AI Automation',
    description: 'Transforming businesses with high-end branding, custom web design, and smart AI automation.',
    siteName: 'ACCENT',
    images: [
      {
        url: '/accentlogos.png',
        width: 1200,
        height: 630,
        alt: 'ACCENT Agency Branding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACCENT | Premium Branding & AI Automation',
    description: 'Transforming businesses with high-end branding, custom web design, and smart AI automation.',
    images: ['/accentlogos.png'],
    creator: '@accentagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <HtmlLangSetter />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
