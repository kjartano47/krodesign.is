import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

type Options = {
  selector?: string
  translateY?: number
  duration?: number
  staggerMs?: number
  threshold?: number
}

export function useRevealOnScroll<T extends HTMLElement>({
  selector = '[data-reveal]',
  translateY = 24,
  duration = 600,
  staggerMs = 90,
  threshold = 0.15,
}: Options = {}) {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = Array.from(container.querySelectorAll<HTMLElement>(selector))
    if (targets.length === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // already in view on load (e.g. tall viewport): show immediately, don't hide-then-reveal
    const rect = container.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) return

    targets.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = `translateY(${translateY}px)`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        animate(targets, {
          opacity: [0, 1],
          translateY: [translateY, 0],
          duration,
          delay: stagger(staggerMs),
          easing: 'outExpo',
        })
        observer.disconnect()
      },
      { threshold }
    )
    observer.observe(container)

    return () => observer.disconnect()
  }, [selector, translateY, duration, staggerMs, threshold])

  return containerRef
}
