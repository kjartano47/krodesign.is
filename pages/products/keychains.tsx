import Seo from '../../components/Seo'
import isLocale from '../../locales/is.json'
import enLocale from '../../locales/en.json'
import { useRouter } from 'next/router'

export default function Keychains() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <>
      <Seo title={t.metaTitleKeychains} description={t.metaDescKeychains} />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{t.categoryKippurTitle}</h1>
          <p className="text-gray-700 mb-6">{t.categoryKippurDesc}</p>
        </div>
      </main>
    </>
  )
}
