import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Individuální Nabídka',
    description: 'Získejte individuální nabídku pro váš projekt. Branding, AI automatizace a webový design na míru vašim potřebám.',
}

export default function CustomQuoteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
