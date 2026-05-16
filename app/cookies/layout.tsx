import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy | Accent Design Studio',
  description: 'Cookies Policy for Accent Design Studio. How we use cookies to improve your experience.',
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
