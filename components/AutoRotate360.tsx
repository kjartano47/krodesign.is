import { useFrameCycler } from '../lib/useFrameCycler'

type Props = {
  images: string[]
  alt: string
  className?: string
  intervalMs?: number
}

export default function AutoRotate360({ images, alt, className, intervalMs = 120 }: Props) {
  const { index, elRef } = useFrameCycler({ frames: images, mode: 'sequential', minIntervalMs: intervalMs })

  return <img ref={elRef} src={images[index]} alt={alt} className={className} />
}
