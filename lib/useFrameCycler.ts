import { useEffect, useRef, useState } from 'react'

type Options = {
  frames: readonly string[]
  mode: 'sequential' | 'random'
  minIntervalMs: number
  maxIntervalMs?: number
}

export function useFrameCycler({ frames, mode, minIntervalMs, maxIntervalMs = minIntervalMs }: Options) {
  const [index, setIndex] = useState(0)
  const elRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    frames.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [frames])

  useEffect(() => {
    if (frames.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let visible = true
    const el = elRef.current
    const observer = el
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting
        })
      : null
    if (el && observer) observer.observe(el)

    const advance = () => {
      if (mode === 'random') {
        setIndex((current) => {
          const next = Math.floor(Math.random() * frames.length)
          return next === current ? (next + 1) % frames.length : next
        })
      } else {
        setIndex((current) => (current + 1) % frames.length)
      }
    }

    let timeoutId: number
    const tick = () => {
      if (visible) advance()
      timeoutId = window.setTimeout(tick, minIntervalMs + Math.random() * (maxIntervalMs - minIntervalMs))
    }
    // first tick is also randomized within the range so independent cyclers don't start in sync
    timeoutId = window.setTimeout(tick, minIntervalMs + Math.random() * (maxIntervalMs - minIntervalMs))

    return () => {
      window.clearTimeout(timeoutId)
      observer?.disconnect()
    }
  }, [frames, mode, minIntervalMs, maxIntervalMs])

  return { index, elRef }
}
