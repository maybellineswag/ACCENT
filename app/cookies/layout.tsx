import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy | ACCENT Agency',
  description: 'Cookies Policy for ACCENT Agency. How we use cookies to improve your experience.',
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
