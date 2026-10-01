import type { ReactNode } from 'react'
import ExpandIcon from './ExpandIcon'

type Props = {
  onClick: () => void
  label: string
  className?: string
  children: ReactNode
}

export default function Zoomable({ onClick, label, className, children }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`relative group cursor-zoom-in block w-full ${className ?? ''}`}
    >
      {children}
      <span className="absolute bottom-2 right-2 bg-black/60 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExpandIcon />
      </span>
    </button>
  )
}
