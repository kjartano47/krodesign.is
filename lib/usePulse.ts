import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

type Options = {
  scale?: number
  duration?: number
}

export function usePulse<T extends HTMLElement>({ scale = 1.04, duration = 1400 }: Options = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animation = animate(el, {
      scale: [1, scale],
      duration,
      direction: 'alternate',
      loop: true,
      easing: 'inOutSine',
    })

    return () => {
      animation.revert()
    }
  }, [scale, duration])

  return ref
}
