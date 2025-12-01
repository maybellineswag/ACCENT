"use client"

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function SmoothScrollHandler() {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Initialize Lenis with maximum performance settings
    const lenis = new Lenis({
      duration: 0.6, // Even faster for smoother feel
      easing: (t) => t, // Linear easing - fastest, no calculations
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7, // Reduced for better responsiveness
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      syncTouch: false,
      lerp: 0.1, // Lower lerp for more responsive, less laggy feel
    })

    lenisRef.current = lenis

    // Add Lenis class to html element
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    // Expose Lenis to window for use in other components
    ;(window as any).lenis = lenis

    // Throttle scroll event dispatch for better performance
    let scrollEventTicking = false
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }: any) => {
      if (!scrollEventTicking) {
        requestAnimationFrame(() => {
          // Dispatch custom event for other components to use
          window.dispatchEvent(new CustomEvent('lenis-scroll', {
            detail: { scroll, limit, velocity, direction, progress }
          }))
          scrollEventTicking = false
        })
        scrollEventTicking = true
      }
    })

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      
      if (link && link.hash && link.pathname === window.location.pathname) {
        const hash = link.hash
        const targetElement = document.querySelector(hash) as HTMLElement
        
        if (targetElement) {
          e.preventDefault()
          
          const headerOffset = 80 // Account for fixed navbar
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          
          // Use Lenis to scroll
          if (lenisRef.current) {
            lenisRef.current.scrollTo(offsetPosition, {
              duration: 0.6,
              easing: (t) => t, // Linear for fastest performance
            })
          }
          
          // Update URL
          window.history.pushState(null, '', hash)
        }
      }
    }

    // Handle initial hash on page load
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash
        const targetElement = document.querySelector(hash) as HTMLElement
        
        if (targetElement) {
          setTimeout(() => {
            const headerOffset = 80
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            
            if (lenisRef.current) {
              lenisRef.current.scrollTo(offsetPosition, {
                duration: 0.6,
                easing: (t) => t, // Linear for fastest performance
              })
            }
          }, 100)
        }
      }
    }

    // Optimized animation frame loop for Lenis
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
        rafIdRef.current = requestAnimationFrame(raf)
      }
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // Add event listener for anchor clicks
    document.addEventListener('click', handleAnchorClick, true)
    
    // Handle hash on initial load
    handleHashScroll()
    
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      document.removeEventListener('click', handleAnchorClick, true)
    }
  }, [])

  return null
}

