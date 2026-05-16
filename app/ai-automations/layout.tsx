import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Automation Services | Accent Design Studio",
  description: "Custom AI workflows and bespoke automation solutions for modern businesses. We build the systems that work while you sleep.",
  openGraph: {
    title: "AI Automation Services | Accent Design Studio",
    description: "Bespoke AI systems for modern founders. Lead intelligence, workflow orchestration, and custom agents.",
  }
}

export default function AiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
