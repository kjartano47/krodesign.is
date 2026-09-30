import { useEffect, useRef } from 'react'
import { animate, onScroll, stagger } from 'animejs'

type Options = {
  selector?: string
  translateY?: number
  staggerMs?: number
}

export function useScrollScrub<T extends HTMLElement>({
  selector = '[data-reveal]',
  translateY = 60,
  staggerMs = 60,
}: Options = {}) {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = Array.from(container.querySelectorAll<HTMLElement>(selector))
    if (targets.length === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animation = animate(targets, {
      opacity: [0, 1],
      translateY: [translateY, 0],
      delay: stagger(staggerMs),
      autoplay: onScroll({
        target: container,
        sync: true,
        // complete the reveal within one viewport height of scrolling (peeking in at the
        // bottom -> reaching the top of the screen), instead of the library default which
        // only finishes once the element has fully scrolled past and off the top entirely.
        // The default depends on there being enough page content below to scroll that far,
        // which this homepage doesn't have, so opacity was plateauing short of 1.
        enter: 'end start',
        leave: 'start start',
      }),
    })

    return () => {
      animation.revert()
    }
  }, [selector, translateY, staggerMs])

  return containerRef
}
