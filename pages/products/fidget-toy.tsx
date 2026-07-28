import Seo from '../../components/Seo'
import Product360 from '../../components/Product360'
import isLocale from '../../locales/is.json'
import enLocale from '../../locales/en.json'
import { useRouter } from 'next/router'
import { getProductFrames } from '../../lib/product360'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return { props: { fidgetFrames: getProductFrames('fidget-toy') } }
}

export default function FidgetToy({ fidgetFrames }: { fidgetFrames: string[] }) {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <>
      <Seo title={t.metaTitleFidget} description={t.metaDescFidget} />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Product360
            images={fidgetFrames}
            alt={t.categoryFiktleikfangTitle}
            className="aspect-square max-w-md mx-auto"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4 break-words">{t.categoryFiktleikfangTitle}</h1>
            <p className="text-gray-700 mb-6">{t.categoryFiktleikfangDesc}</p>
          </div>
        </div>
      </main>
    </>
  )
}
