import { useFrameCycler } from '../lib/useFrameCycler'

type LayerProps = {
  frames: readonly string[]
  imgClassName: string
  minIntervalMs: number
  maxIntervalMs: number
}

function FlickerLayer({ frames, imgClassName, minIntervalMs, maxIntervalMs }: LayerProps) {
  const { index, elRef } = useFrameCycler({ frames, mode: 'random', minIntervalMs, maxIntervalMs })

  return <img ref={elRef} src={frames[index]} alt="" aria-hidden className={`absolute inset-0 ${imgClassName}`} />
}

type Props = {
  base: string
  overlayLayers: readonly (readonly string[])[]
  alt: string
  className?: string
  imgClassName?: string
  minIntervalMs?: number
  maxIntervalMs?: number
}

export default function FlickerImage({
  base,
  overlayLayers,
  alt,
  className,
  imgClassName = 'w-full h-full object-cover',
  minIntervalMs = 90,
  maxIntervalMs = 260,
}: Props) {
  return (
    <div className={`relative ${className ?? ''}`}>
      <img src={base} alt={alt} className={imgClassName} />
      {overlayLayers.map((frames, i) => (
        <FlickerLayer
          key={i}
          frames={frames}
          imgClassName={imgClassName}
          minIntervalMs={minIntervalMs}
          maxIntervalMs={maxIntervalMs}
        />
      ))}
    </div>
  )
}
