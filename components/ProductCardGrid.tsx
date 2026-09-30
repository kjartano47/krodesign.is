import Link from 'next/link'
import type { ReactNode } from 'react'
import { useRevealOnScroll } from '../lib/useRevealOnScroll'

export type ProductCard = {
  slug: string
  title: string
  desc: string | string[]
  thumbnail?: ReactNode
}

type Props = {
  items: ProductCard[]
  basePath: string
  titleAs?: 'h2' | 'h3'
}

const descClass = 'text-gray-600 dark:text-gray-400 group-hover:text-black transition-colors'

export default function ProductCardGrid({ items, basePath, titleAs = 'h2' }: Props) {
  const Heading = titleAs
  const gridRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Link key={item.slug} href={`${basePath}/${item.slug}`} data-reveal className="block h-full">
          <div className="flex items-center gap-4 h-full border-2 border-black dark:border-white p-6 hover:bg-kroOrange transition-colors duration-150 group">
            {item.thumbnail}
            <div>
              <Heading className="text-2xl font-black mb-2 group-hover:text-black transition-colors">{item.title}</Heading>
              {(Array.isArray(item.desc) ? item.desc : [item.desc]).map((line, i) => (
                <p key={i} className={descClass}>{line}</p>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
