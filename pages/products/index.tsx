import Seo from '../../components/Seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import isLocale from '../../locales/is.json'
import enLocale from '../../locales/en.json'
import { getProductFrames } from '../../lib/product360'
import type { GetStaticProps } from 'next'

const products = [
  {
    slug: 'keychains',
    titleIs: 'Lyklakippa',
    descIs: 'Lyklakippa með hjarta-ljósinu, merkt Akureyri',
    titleEn: 'Keychain',
    descEn: 'Keychain with the heart-light, marked Akureyri',
  },
  {
    slug: 'fridge-magnets',
    titleIs: 'Ísskápssegull',
    descIs: 'Ísskápssegull með hjarta-ljósinu, merktur Akureyri',
    titleEn: 'Fridge Magnet',
    descEn: 'Fridge magnet with the heart-light, marked Akureyri',
  },
  {
    slug: 'fidget-toy',
    titleIs: 'Fiktleikfang',
    descIs: 'Fiktleikfang á lyklakippu með hjarta-ljósinu, merkt Akureyri',
    titleEn: 'Fidget Toy Keychain',
    descEn: 'Fidget toy keychain with the heart-light, marked Akureyri',
  },
]

export const getStaticProps: GetStaticProps = async () => {
  const images = Object.fromEntries(
    products.map((p) => [p.slug, getProductFrames(p.slug)[0] ?? null])
  )
  return { props: { images } }
}

export default function ProductsPage({ images }: { images: Record<string, string | null> }) {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale
  const isEn = locale === 'en'

  return (
    <>
      <Seo title={t.metaTitleProducts} description={t.metaDescProducts} />
      <main className="flex-1">
        <section className="bg-kroOrange py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-black">{t.navProducts}</h1>
          </div>
        </section>
        <section className="py-12 bg-white border-t-2 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>
                  <div className="flex items-center gap-4 border-2 border-black p-6 hover:bg-kroOrange transition-colors duration-150 group">
                    {images[p.slug] && (
                      <img
                        src={images[p.slug]!}
                        alt={isEn ? p.titleEn : p.titleIs}
                        className="w-20 h-20 shrink-0 object-cover border-2 border-black"
                      />
                    )}
                    <div>
                      <h2 className="text-2xl font-black mb-2">{isEn ? p.titleEn : p.titleIs}</h2>
                      <p className="text-gray-600 group-hover:text-black transition-colors">{isEn ? p.descEn : p.descIs}</p>
                    </div>
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
