import Seo from '../../../components/Seo'
import Product360 from '../../../components/Product360'
import { useTranslations } from '../../../lib/useTranslations'
import { getProductFrames } from '../../../lib/product360'
import { souvenirs } from '../../../lib/souvenirs'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async ({ locales }) => ({
  paths: (locales ?? ['is']).flatMap((locale) => souvenirs.map((s) => ({ params: { slug: s.slug }, locale }))),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const souvenir = souvenirs.find((s) => s.slug === params?.slug)
  if (!souvenir) return { notFound: true }
  return { props: { souvenir, frames: getProductFrames(souvenir.slug) } }
}

export default function SouvenirDetail({
  souvenir,
  frames,
}: {
  souvenir: (typeof souvenirs)[number]
  frames: string[]
}) {
  const { t } = useTranslations()

  return (
    <>
      <Seo title={t[souvenir.metaTitleKey]} description={t[souvenir.metaDescKey]} />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Product360 images={frames} alt={t[souvenir.titleKey]} className="aspect-square max-w-md mx-auto" />
          <div>
            <h1 className="text-3xl font-bold mb-4 break-words">{t[souvenir.titleKey]}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t[souvenir.descKey]}</p>
          </div>
        </div>
      </main>
    </>
  )
}
