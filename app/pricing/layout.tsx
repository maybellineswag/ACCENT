import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing & Packages | Accent Design Studio Prague',
  description: 'Explore transparent pricing for Accent\'s custom web design, brand identity, and product design services in Prague. No templates, no compromises.',
  openGraph: {
    title: 'Pricing & Packages | Accent Design Studio Prague',
    description: 'Explore our design studio packages.',
    url: 'https://accentai.eu/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
