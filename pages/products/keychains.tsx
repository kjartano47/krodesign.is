import Seo from '../../components/Seo'
import Product360 from '../../components/Product360'
import { useTranslations } from '../../lib/useTranslations'
import { getProductFrames } from '../../lib/product360'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return { props: { keychainFrames: getProductFrames('keychains') } }
}

export default function Keychains({ keychainFrames }: { keychainFrames: string[] }) {
  const { t } = useTranslations()

  return (
    <>
      <Seo title={t.metaTitleKeychains} description={t.metaDescKeychains} />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Product360
            images={keychainFrames}
            alt={t.categoryKippurTitle}
            className="aspect-square max-w-md mx-auto"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4 break-words">{t.categoryKippurTitle}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t.categoryKippurDesc}</p>
          </div>
        </div>
      </main>
    </>
  )
}
