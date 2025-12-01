import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { HtmlLangSetter } from '@/components/HtmlLangSetter'
import { SmoothScrollHandler } from '@/components/SmoothScrollHandler'

export const metadata: Metadata = {
  title: 'ACCENT | Web Design v Praze',
  description: 'Profesionální web design a branding pro moderní podniky v Praze. Získejte prémiový web design, profesionální branding a více klientů během dnů, ne týdnů.',
  keywords: 'web design, web design Praha, branding, Praha, podnikání, marketing, tvorba webu, responzivní web',
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
    title: 'ACCENT | Web Design v Praze',
    description: 'Profesionální web design a branding pro moderní podniky v Praze. Získejte prémiový web design, profesionální branding a více klientů během dnů, ne týdnů.',
    siteName: 'ACCENT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACCENT | Web Design v Praze',
    description: 'Profesionální web design a branding pro moderní podniky v Praze. Získejte prémiový web design, profesionální branding a více klientů během dnů, ne týdnů.',
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
          <SmoothScrollHandler />
          <HtmlLangSetter />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
