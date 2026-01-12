"use client"

import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface StaggeredFadeInProps {
  children: ReactNode[]
  delay?: number
  className?: string
}

export function StaggeredFadeIn({ children, delay = 100, className = "" }: StaggeredFadeInProps) {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set())

  useEffect(() => {
    children.forEach((_, index) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => new Set([...prev, index]))
      }, index * delay)
    })
  }, [children, delay])

  return (
    <>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            visibleIndexes.has(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          } ${className}`}
        >
          {child}
        </div>
      ))}
    </>
  )
}
