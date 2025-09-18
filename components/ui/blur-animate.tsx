"use client"

import React, { ReactNode } from 'react'
import { useBlurAnimation, useStaggeredBlurAnimation } from '@/hooks/useBlurAnimation'

interface BlurAnimateProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'default'
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function BlurAnimate({
  children,
  direction = 'default',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  className = '',
  as: Component = 'div'
}: BlurAnimateProps) {
  const { elementRef, isVisible } = useBlurAnimation({
    threshold,
    rootMargin,
    delay,
    duration
  })

  const getAnimationClass = () => {
    const baseClass = direction === 'default' ? 'blur-animate-in' : `blur-animate-in-${direction}`
    const animateClass = isVisible ? 'animate' : ''
    const delayClass = delay > 0 ? `blur-delay-${Math.min(Math.round(delay * 1000), 1000)}` : ''
    
    return [baseClass, animateClass, delayClass, className].filter(Boolean).join(' ')
  }

  return (
    <Component
      ref={elementRef}
      className={getAnimationClass()}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </Component>
  )
}

interface StaggeredBlurAnimateProps {
  children: ReactNode[]
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'default'
  delay?: number
  stagger?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function StaggeredBlurAnimate({
  children,
  direction = 'default',
  delay = 0,
  stagger = 150,
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  className = '',
  as: Component = 'div'
}: StaggeredBlurAnimateProps) {
  const { containerRef, visibleElements } = useStaggeredBlurAnimation(children.length, {
    threshold,
    rootMargin,
    delay,
    duration,
    stagger
  })

  const getAnimationClass = (index: number) => {
    const baseClass = direction === 'default' ? 'blur-animate-in' : `blur-animate-in-${direction}`
    const animateClass = visibleElements[index] ? 'animate' : ''
    
    return [baseClass, animateClass, className].filter(Boolean).join(' ')
  }

  return (
    <Component ref={containerRef} className="staggered-container">
      {children.map((child, index) => (
        <div
          key={index}
          className={getAnimationClass(index)}
          style={{ transitionDuration: `${duration}ms` }}
        >
          {child}
        </div>
      ))}
    </Component>
  )
}

// Specialized components for common use cases
export function BlurAnimateUp(props: Omit<BlurAnimateProps, 'direction'>) {
  return <BlurAnimate {...props} direction="up" />
}

export function BlurAnimateDown(props: Omit<BlurAnimateProps, 'direction'>) {
  return <BlurAnimate {...props} direction="down" />
}

export function BlurAnimateLeft(props: Omit<BlurAnimateProps, 'direction'>) {
  return <BlurAnimate {...props} direction="left" />
}

export function BlurAnimateRight(props: Omit<BlurAnimateProps, 'direction'>) {
  return <BlurAnimate {...props} direction="right" />
}

export function BlurAnimateScale(props: Omit<BlurAnimateProps, 'direction'>) {
  return <BlurAnimate {...props} direction="scale" />
}

// Staggered variants
export function StaggeredBlurAnimateUp(props: Omit<StaggeredBlurAnimateProps, 'direction'>) {
  return <StaggeredBlurAnimate {...props} direction="up" />
}

export function StaggeredBlurAnimateDown(props: Omit<StaggeredBlurAnimateProps, 'direction'>) {
  return <StaggeredBlurAnimate {...props} direction="down" />
}

export function StaggeredBlurAnimateLeft(props: Omit<StaggeredBlurAnimateProps, 'direction'>) {
  return <StaggeredBlurAnimate {...props} direction="left" />
}

export function StaggeredBlurAnimateRight(props: Omit<StaggeredBlurAnimateProps, 'direction'>) {
  return <StaggeredBlurAnimate {...props} direction="right" />
}

export function StaggeredBlurAnimateScale(props: Omit<StaggeredBlurAnimateProps, 'direction'>) {
  return <StaggeredBlurAnimate {...props} direction="scale" />
}
