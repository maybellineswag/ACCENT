import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | ACCENT Agency',
  description: 'A selection of our premium web design and branding projects for clinics, salons, and modern businesses.',
  openGraph: {
    title: 'Portfolio | ACCENT Agency',
    description: 'Explore our latest work and case studies.',
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
