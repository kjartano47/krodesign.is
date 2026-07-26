import Seo from '../../components/Seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import isLocale from '../../locales/is.json'
import enLocale from '../../locales/en.json'

const products = [
  {
    slug: 'keychains',
    titleIs: 'Kippur',
    descIs: 'Lyklakippur með hjarta-ljósinu, merktar Akureyri',
    titleEn: 'Keychains',
    descEn: 'Keychains with the heart-light, marked Akureyri',
  },
  {
    slug: 'fridge-magnets',
    titleIs: 'Seglar',
    descIs: 'Ísskápsseglar með hjarta-ljósinu, merktir Akureyri',
    titleEn: 'Fridge Magnets',
    descEn: 'Fridge magnets with the heart-light, marked Akureyri',
  },
]

export default function ProductsPage() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale
  const isEn = locale === 'en'

  return (
    <>
      <Seo title={t.metaTitleProducts} description={t.metaDescProducts} />
      <main className="flex-1">
        <section className="bg-kroOrange py-14">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-black text-black">{t.navProducts}</h1>
          </div>
        </section>
        <section className="py-12 bg-white border-t-2 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>
                  <div className="border-2 border-black p-8 hover:bg-kroOrange transition-colors duration-150 group">
                    <h2 className="text-2xl font-black mb-3">{isEn ? p.titleEn : p.titleIs}</h2>
                    <p className="text-gray-600 group-hover:text-black transition-colors">{isEn ? p.descEn : p.descIs}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
