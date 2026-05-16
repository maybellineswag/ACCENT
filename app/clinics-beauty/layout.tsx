import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Design & Branding for Clinics & Salons | Accent',
    description: 'Specialized brand identity and web design for clinics and beauty businesses. Stand out with a premium, template-free aesthetic.',
}

export default function ClinicsBeautyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
