import Hero from '../components/Hero'
import CategoryPreview from '../components/CategoryPreview'
import Seo from '../components/Seo'
import OrganizationSchema from '../components/OrganizationSchema'
import { useTranslations } from '../lib/useTranslations'
import { getProductFrames } from '../lib/product360'
import { useScrollScrub } from '../lib/useScrollScrub'
import { usePulse } from '../lib/usePulse'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const images = {
    lanterns: ['/products/lanterns/lanterns-overview.webp'],
    souvenirs: getProductFrames('fridge-magnets'),
  }
  return { props: { images } }
}

export default function Home({ images }: { images: Record<string, string[]> }) {
  const { t } = useTranslations()
  const eventRef = useScrollScrub<HTMLElement>()
  const eventCtaRef = usePulse<HTMLAnchorElement>()

  const categories = [
    { slug: 'lanterns', title: t.categoryLuktirTitle, desc: t.categoryLuktirDesc, images: images.lanterns },
    { slug: 'souvenirs', title: t.categorySouvenirsTitle, desc: t.categorySouvenirsDesc, images: images.souvenirs },
  ]

  return (
    <>
      <Seo title={t.metaTitleHome} description={t.metaDescHome} />
      <OrganizationSchema />
      <main className="flex-1">
        <Hero title={t.heroTagline} subtitle={t.heroIntro} />
        <CategoryPreview categories={categories} title={t.categoriesTitle} />
        <section ref={eventRef} className="py-24 md:py-32 bg-black text-white border-t-2 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-5xl md:text-7xl font-black mb-6 text-kroOrange break-words">{t.eventTitle}</h2>
            <p data-reveal className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-2xl mb-10">{t.eventDesc}</p>
            <div data-reveal className="flex flex-col sm:flex-row sm:items-center gap-8">
              <div>
                <p className="font-bold text-white text-xl md:text-2xl">{t.eventDates}</p>
                <p className="text-gray-300 text-lg">{t.eventLocation}</p>
              </div>
              <a
                ref={eventCtaRef}
                href="https://fb.me/e/c3sWFkzYH"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-kroOrange text-kroOrange font-bold text-lg px-7 py-4 hover:bg-kroOrange hover:text-black transition-colors duration-150 w-fit"
              >
                {t.eventCta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-4">{t.brandStoryTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">{t.brandStory}</p>
          </div>
        </section>
        {/* Kista storefront banner stashed 2026-09-30: Kista isn't selling our product again until next year.
            Re-enable this section (and the storeTitle/storeDesc/storeName/storeAddress/storePhone/storeCta
            locale keys, still intact in locales/*.json) once the listing resumes. */}
      </main>
    </>
  )
}
