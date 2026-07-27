import Link from 'next/link'

type Cat = { slug: string; title: string; desc: string; image?: string | null }

type Props = {
  categories: Cat[]
  title?: string
}

export default function CategoryPreview({ categories, title }: Props) {
  return (
    <section className="py-12 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6">
        {title && <h2 className="text-3xl font-black mb-8">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`}>
              <div className="flex items-center gap-4 border-2 border-black p-6 hover:bg-kroOrange transition-colors duration-150 group">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-20 h-20 shrink-0 object-cover border-2 border-black"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-black mb-2">{c.title}</h3>
                  <p className="text-gray-600 group-hover:text-black transition-colors">{c.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
