import AutoRotate360 from './AutoRotate360'
import ProductCardGrid from './ProductCardGrid'

type Cat = { slug: string; title: string; desc: string; images: string[] }

type Props = {
  categories: Cat[]
  title?: string
}

export default function CategoryPreview({ categories, title }: Props) {
  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-6">
        {title && <h2 className="text-3xl font-black mb-8">{title}</h2>}
        <ProductCardGrid
          basePath="/products"
          titleAs="h3"
          items={categories.map((c) => ({
            slug: c.slug,
            title: c.title,
            desc: c.desc,
            thumbnail: c.images.length > 0 && (
              <AutoRotate360
                images={c.images}
                alt={c.title}
                className="w-20 h-20 shrink-0 object-cover border-2 border-black dark:border-white"
              />
            ),
          }))}
        />
      </div>
    </section>
  )
}
