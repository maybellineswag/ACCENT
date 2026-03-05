import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Vybrané Projekty',
    description: 'Prohlédněte si naše vybrané projekty v oblasti brandingu, AI automatizace a moderního webového designu.',
}

export default function SelectedWorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
