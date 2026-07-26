import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import isLocale from '../../locales/is.json'
import enLocale from '../../locales/en.json'
import { useRouter } from 'next/router'

export default function FridgeMagnets() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <div>
      <Seo title={t.metaTitleMagnets} description={t.metaDescMagnets} />
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{t.categorySeglarTitle}</h1>
          <p className="text-gray-700 mb-6">{t.categorySeglarDesc}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
