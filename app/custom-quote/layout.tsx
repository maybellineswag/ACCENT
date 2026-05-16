import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Individuální Nabídka | Accent Design Studio Prague',
    description: 'Získejte individuální nabídku pro váš projekt. Branding, AI automatizace a webový design od Accent Design Studio.',
}

export default function CustomQuoteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
