import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Accent Design Studio Prague',
  description: 'Frequently asked questions about working with our product design and branding studio in Prague.',
  openGraph: {
    title: 'FAQ | Accent Design Studio Prague',
    description: 'Get answers to your questions about working with Accent.',
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
