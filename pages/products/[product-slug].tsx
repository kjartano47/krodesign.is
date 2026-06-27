import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import isLocale from '../../locales/is.json'
import enLocale from '../../locales/en.json'

export default function ProductPage() {
  const { locale, query } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale
  const slug = Array.isArray(query.product-slug) ? query['product-slug'][0] : query['product-slug']

  return (
    <div>
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{String(slug)}</h1>
          <p className="text-gray-700">{t.productPlaceholder}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
