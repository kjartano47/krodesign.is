import Link from 'next/link'

type Cat = { slug: string; title: string; desc: string }

type Props = {
  categories: Cat[]
  title?: string
}

export default function CategoryPreview({ categories, title }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {title && <h2 className="text-3xl font-black mb-8">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`}>
              <div className="bg-white border border-gray-200 p-8 hover:shadow-lg hover:border-kroOrange transition-all duration-200 group">
                <div className="w-8 h-1 bg-kroOrange mb-5 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-500">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
