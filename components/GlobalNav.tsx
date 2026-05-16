"use client"

import { usePathname } from "next/navigation"
import { NavBar } from "@/components/NavBar"

export function GlobalNav() {
  const pathname = usePathname()

  // Do not render NavBar on custom quote pages
  if (pathname?.includes('/custom-quote')) {
    return null
  }

  const isClinics = pathname?.includes('/clinics-beauty')

  return <NavBar isClinics={isClinics} />
}
