import { useCallback, useRef, useState } from 'react'
import ExpandIcon from './ExpandIcon'

type Product360Props = {
  images: string[]
  alt: string
  className?: string
  onImageClick?: (src: string) => void
}

export default function Product360({ images, alt, className = '', onImageClick }: Product360Props) {
  const [frame, setFrame] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const dragMovedRef = useRef(false)
  const preloadedRef = useRef(false)

  const preloadRemainingFrames = useCallback(() => {
    if (preloadedRef.current) return
    preloadedRef.current = true
    images.slice(1).forEach((src) => {
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
      onMouseEnter={preloadRemainingFrames}
      onMouseMove={(e) => setFrameFromX(e.clientX)}
      onTouchStart={() => {
        draggingRef.current = true
        dragMovedRef.current = false
        preloadRemainingFrames()
      }}
      onTouchEnd={() => {
        draggingRef.current = false
      }}
      onTouchMove={(e) => {
        if (draggingRef.current) {
          dragMovedRef.current = true
          setFrameFromX(e.touches[0].clientX)
        }
      }}
      onClick={() => {
        if (dragMovedRef.current) {
          dragMovedRef.current = false
          return
        }
        onImageClick?.(images[frame])
      }}
      className={`relative select-none group ${onImageClick ? 'cursor-zoom-in' : 'cursor-ew-resize'} ${className}`}
    >
      <img
        src={images[frame]}
        alt={alt}
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
      {onImageClick && (
        <span className="absolute bottom-2 right-2 bg-black/60 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ExpandIcon />
        </span>
      )}
    </div>
  )
}
