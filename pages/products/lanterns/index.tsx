import Seo from '../../../components/Seo'
import PageBanner from '../../../components/PageBanner'
import FlickerImage from '../../../components/FlickerImage'
import ProductCardGrid from '../../../components/ProductCardGrid'
import { useTranslations } from '../../../lib/useTranslations'
import { lanterns, lanternThumbFrames } from '../../../lib/lanterns'

export default function LanternsPage() {
  const { t } = useTranslations()

  return (
    <>
      <Seo title={t.metaTitleLanterns} description={t.metaDescLanterns} />
      <main className="flex-1">
        <PageBanner title={t.categoryLuktirTitle} />
        <section className="py-12 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto px-6">
            <ProductCardGrid
              basePath="/products/lanterns"
              items={lanterns.map((l) => ({
                slug: l.slug,
                title: t[l.titleKey],
                desc: [t[l.descKey], t[l.sizeKey]],
                thumbnail: (
                  <FlickerImage
                    base={`/products/lanterns/${l.photo}-thumb.webp`}
                    overlayLayers={l.overlayPrefixes.map(lanternThumbFrames)}
                    alt={t[l.titleKey]}
                    className="w-20 h-20 shrink-0 border-2 border-black dark:border-white"
                    imgClassName={'imgClassName' in l ? l.imgClassName : undefined}
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
