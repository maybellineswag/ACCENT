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
    title: 'ACCENT | Prémiový Branding & AI Automatizace v Praze',
    description: 'Prémiový branding a AI automatizace pro moderní podniky v Praze. Získejte profesionální design, chytrou automatizaci a více klientů během dnů, ne týdnů.',
    siteName: 'ACCENT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACCENT | Prémiový Branding & AI Automatizace v Praze',
    description: 'Prémiový branding a AI automatizace pro moderní podniky v Praze. Získejte profesionální design, chytrou automatizaci a více klientů během dnů, ne týdnů.',
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
