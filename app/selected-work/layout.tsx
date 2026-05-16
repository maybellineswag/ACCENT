import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Accent Design Studio Prague',
  description: 'A selection of our premium web design, brand identity, and product design projects for ambitious businesses.',
  openGraph: {
    title: 'Portfolio | Accent Design Studio Prague',
    description: 'Explore our latest design work and case studies.',
    url: 'https://accentai.eu/selected-work',
  },
}

export default function SelectedWorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
