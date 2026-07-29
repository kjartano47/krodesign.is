import Seo from '../../components/Seo'
import Link from 'next/link'
import { useTranslations } from '../../lib/useTranslations'
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
    slug: 'fidget-keychain',
    titleIs: 'Fikt-lyklakippa',
    descIs: 'Fikt-lyklakippa með hjarta-ljósinu, merkt Akureyri',
    titleEn: 'Fidget Keychain',
    descEn: 'Fidget keychain with the heart-light, marked Akureyri',
  },
]

export const getStaticProps: GetStaticProps = async () => {
  const images = Object.fromEntries(
    products.map((p) => [p.slug, getProductFrames(p.slug)[0] ?? null])
  )
  return { props: { images } }
}

export default function ProductsPage({ images }: { images: Record<string, string | null> }) {
  const { locale, t } = useTranslations()
  const isEn = locale === 'en'

  return (
    <>
      <Seo title={t.metaTitleProducts} description={t.metaDescProducts} />
      <main className="flex-1">
        <section className="bg-kroOrange py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-black break-words">{t.navProducts}</h1>
          </div>
        </section>
        <section className="py-12 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>
                  <div className="flex items-center gap-4 border-2 border-black dark:border-white p-6 hover:bg-kroOrange transition-colors duration-150 group">
                    {images[p.slug] && (
                      <img
                        src={images[p.slug]!}
                        alt={isEn ? p.titleEn : p.titleIs}
                        className="w-20 h-20 shrink-0 object-cover border-2 border-black dark:border-white"
                      />
                    )}
                    <div>
                      <h2 className="text-2xl font-black mb-2 group-hover:text-black transition-colors">{isEn ? p.titleEn : p.titleIs}</h2>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-black transition-colors">{isEn ? p.descEn : p.descIs}</p>
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
