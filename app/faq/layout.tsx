import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | ACCENT Agency',
  description: 'Frequently asked questions about our web design process, branding services, and AI automation solutions.',
  openGraph: {
    title: 'FAQ | ACCENT Agency',
    description: 'Get answers to your questions about working with ACCENT.',
    url: 'https://accentai.eu/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
