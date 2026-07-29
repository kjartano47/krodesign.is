import Hero from '../components/Hero'
import CategoryPreview from '../components/CategoryPreview'
import Seo from '../components/Seo'
import OrganizationSchema from '../components/OrganizationSchema'
import { useTranslations } from '../lib/useTranslations'
import { getProductFrames } from '../lib/product360'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const images = {
    keychains: getProductFrames('keychains')[0] ?? null,
    'fridge-magnets': getProductFrames('fridge-magnets')[0] ?? null,
    'fidget-toy': getProductFrames('fidget-toy')[0] ?? null,
  }
  return { props: { images } }
}

export default function Home({ images }: { images: Record<string, string | null> }) {
  const { t } = useTranslations()

  const categories = [
    { slug: 'keychains', title: t.categoryKippurTitle, desc: t.categoryKippurDesc, image: images.keychains },
    { slug: 'fridge-magnets', title: t.categorySeglarTitle, desc: t.categorySeglarDesc, image: images['fridge-magnets'] },
    { slug: 'fidget-toy', title: t.categoryFiktleikfangTitle, desc: t.categoryFiktleikfangDesc, image: images['fidget-toy'] }
  ]

  return (
    <>
      <Seo title={t.metaTitleHome} description={t.metaDescHome} />
      <OrganizationSchema />
      <main className="flex-1">
        <Hero title={t.heroTagline} subtitle={t.heroIntro} />
        <CategoryPreview categories={categories} title={t.categoriesTitle} />
        <section className="py-12 bg-white border-t-2 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-4">{t.brandStoryTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{t.brandStory}</p>
          </div>
        </section>
        <section className="py-12 bg-black text-white border-t-2 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-4 text-kroOrange">{t.storeTitle}</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-6">{t.storeDesc}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <p className="font-bold text-white">{t.storeName}</p>
                <p className="text-gray-300">{t.storeAddress}</p>
                <p className="text-gray-300">{t.storePhone}</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kista%2C+Strandg%C3%B6tu+12%2C+600+Akureyri"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-kroOrange text-kroOrange font-bold px-5 py-3 hover:bg-kroOrange hover:text-black transition-colors duration-150 w-fit"
              >
                {t.storeCta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
