import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ACCENT Agency',
  description: 'Privacy Policy for ACCENT Agency. We respect your data and privacy.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
