import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Accent Design Studio',
  description: 'Privacy Policy for Accent Design Studio. We respect your data and privacy.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
