import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | ACCENT Agency',
  description: 'Transparent pricing for premium web design, branding, and AI automation. Choose the right package to scale your business with ACCENT.',
  openGraph: {
    title: 'Pricing | ACCENT Agency',
    description: 'Explore our web design and automation packages.',
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
