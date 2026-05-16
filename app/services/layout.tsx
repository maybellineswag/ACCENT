import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Branding, Web & Product Design",
  description: "Comprehensive design services including brand identity, print design, web design, product/UI/UX design, and AI automation.",
  openGraph: {
    title: "Our Services | Accent Design Studio",
    description: "Discover our full range of design and automation services.",
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
