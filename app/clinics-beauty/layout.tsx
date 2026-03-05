import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ACCENT | Professional Web Design for Beauty Salons',
    description: 'Professional web design and visual identity for clinics & beauty businesses. Get a premium, custom-built website that builds trust and grows your salon or clinic.',
}

export default function ClinicsBeautyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
