import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { HtmlLangSetter } from '@/components/HtmlLangSetter'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'ACCENT | Web Design & Visual Identity',
  description: 'Transforming businesses with custom web design and high-end visual identity. We build premium, template-free websites for clinics, salons, and modern businesses in Prague and across Europe.',
  keywords: 'web design, brand identity, branding agency, custom websites, Next.js developer, digital transformation, Prague, Europe, web designer',
  authors: [{ name: 'ACCENT' }],
  creator: 'ACCENT',
  publisher: 'ACCENT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://accentai.eu'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'cs-CZ': '/cs',
      'ru-RU': '/ru',
      'uk-UA': '/uk',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://accentai.eu',
    title: 'ACCENT | Web Design & Visual Identity',
    description: 'Transforming businesses with custom web design and high-end visual identity.',
    siteName: 'ACCENT',
    images: [
      {
        url: '/accentlogos.png',
        width: 1200,
        height: 630,
        alt: 'ACCENT Agency Web Design & Visual Identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACCENT | Web Design & Visual Identity',
    description: 'Transforming businesses with custom web design and high-end visual identity.',
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
        <SchemaMarkup />
        <LanguageProvider>
          <HtmlLangSetter />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
