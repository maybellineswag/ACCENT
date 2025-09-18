"use client"

import { useEffect, useRef, useState } from 'react'

interface UseBlurAnimationOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
  duration?: number
  stagger?: number
}

export function useBlurAnimation(options: UseBlurAnimationOptions = {}) {
  const {
    threshold = 0.001,
    rootMargin = '300px 0px 300px 0px',
    delay = 0,
    duration = 150,
    stagger = 2
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [animationDelay, setAnimationDelay] = useState(delay)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay for staggered animations
            setTimeout(() => {
              setIsVisible(true)
            }, animationDelay)
            
            // Unobserve after animation starts
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, animationDelay])

  const setStaggerDelay = (index: number) => {
    setAnimationDelay(delay + (index * stagger))
  }

  return {
    elementRef,
    isVisible,
    setStaggerDelay,
    animationDuration: duration
  }
}

// Hook for multiple elements with staggered animations
export function useStaggeredBlurAnimation(
  count: number,
  options: UseBlurAnimationOptions = {}
) {
  const {
    threshold = 0.001,
    rootMargin = '300px 0px 300px 0px',
    delay = 0,
    duration = 150,
    stagger = 2
  } = options

  const [visibleElements, setVisibleElements] = useState<boolean[]>(
    new Array(count).fill(false)
  )
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate elements with stagger
            for (let i = 0; i < count; i++) {
              setTimeout(() => {
                setVisibleElements(prev => {
                  const newState = [...prev]
                  newState[i] = true
                  return newState
                })
              }, delay + (i * stagger))
            }
            
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [count, threshold, rootMargin, delay, stagger])

  return {
    containerRef,
    visibleElements,
    animationDuration: duration
  }
}
