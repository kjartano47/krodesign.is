import Seo from '../../../components/Seo'
import PageBanner from '../../../components/PageBanner'
import AutoRotate360 from '../../../components/AutoRotate360'
import ProductCardGrid from '../../../components/ProductCardGrid'
import { useTranslations } from '../../../lib/useTranslations'
import { getProductFrames } from '../../../lib/product360'
import { souvenirs } from '../../../lib/souvenirs'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const images = Object.fromEntries(souvenirs.map((p) => [p.slug, getProductFrames(p.slug)]))
  return { props: { images } }
}

export default function SouvenirsPage({ images }: { images: Record<string, string[]> }) {
  const { t } = useTranslations()

  return (
    <>
      <Seo title={t.metaTitleSouvenirs} description={t.metaDescSouvenirs} />
      <main className="flex-1">
        <PageBanner title={t.categorySouvenirsTitle} />
        <section className="py-12 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto px-6">
            <ProductCardGrid
              basePath="/products/souvenirs"
              items={souvenirs.map((p) => ({
                slug: p.slug,
                title: t[p.titleKey],
                desc: t[p.descKey],
                thumbnail: images[p.slug]?.length > 0 && (
                  <AutoRotate360
                    images={images[p.slug]}
                    alt={t[p.titleKey]}
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
