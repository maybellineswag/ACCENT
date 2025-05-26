"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
}

export function GlowEffect({ children, className = "" }: GlowEffectProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      element.style.setProperty("--mouse-x", `${x}%`)
      element.style.setProperty("--mouse-y", `${y}%`)
    }

    element.addEventListener("mousemove", handleMouseMove)
    return () => element.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={elementRef} className={`glow-on-hover ${className}`}>
      {children}
    </div>
  )
}
