import { useCallback, useEffect, useRef, useState } from 'react'

type Product360Props = {
  images: string[]
  alt: string
  className?: string
}

export default function Product360({ images, alt, className = '' }: Product360Props) {
  const [frame, setFrame] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [images])

  const setFrameFromX = useCallback(
    (clientX: number) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
      const index = Math.min(images.length - 1, Math.floor(ratio * images.length))
      setFrame(index)
    },
    [images.length]
  )

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => setFrameFromX(e.clientX)}
      onTouchStart={() => {
        draggingRef.current = true
      }}
      onTouchEnd={() => {
        draggingRef.current = false
      }}
      onTouchMove={(e) => {
        if (draggingRef.current) setFrameFromX(e.touches[0].clientX)
      }}
      className={`relative select-none cursor-ew-resize ${className}`}
    >
      <img
        src={images[frame]}
        alt={alt}
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
    </div>
  )
}
