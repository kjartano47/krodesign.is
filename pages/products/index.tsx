import Seo from '../../components/Seo'
import PageBanner from '../../components/PageBanner'
import ProductCardGrid from '../../components/ProductCardGrid'
import { useTranslations } from '../../lib/useTranslations'
import { getProductFrames } from '../../lib/product360'
import type { GetStaticProps } from 'next'

const groups = [
  { slug: 'lanterns', titleKey: 'categoryLuktirTitle', descKey: 'categoryLuktirDesc' },
  { slug: 'souvenirs', titleKey: 'categorySouvenirsTitle', descKey: 'categorySouvenirsDesc' },
] as const

export const getStaticProps: GetStaticProps = async () => {
  const images: Record<string, string | null> = {
    lanterns: '/products/lanterns/lanterns-overview.webp',
    souvenirs: getProductFrames('fridge-magnets')[0] ?? null,
  }
  return { props: { images } }
}

export default function ProductsPage({ images }: { images: Record<string, string | null> }) {
  const { t } = useTranslations()

  return (
    <>
      <Seo title={t.metaTitleProducts} description={t.metaDescProducts} />
      <main className="flex-1">
        <PageBanner title={t.navProducts} />
        <section className="py-12 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto px-6">
            <ProductCardGrid
              basePath="/products"
              items={groups.map((g) => ({
                slug: g.slug,
                title: t[g.titleKey],
                desc: t[g.descKey],
                thumbnail: images[g.slug] && (
                  <img
                    src={images[g.slug]!}
                    alt={t[g.titleKey]}
                    className="w-20 h-20 shrink-0 object-cover border-2 border-black dark:border-white"
                  />
                ),
              }))}
            />
          </div>
        </section>
      </main>
    </>
  )
}
