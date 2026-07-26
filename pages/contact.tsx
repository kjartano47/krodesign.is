import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'
import { useRouter } from 'next/router'

export default function Contact() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <div>
      <Seo title={t.metaTitleContact} description={t.metaDescContact} />
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.contactTitle}</h1>
          <p className="mb-6">{t.contactPrompt}</p>
          <a href={`mailto:${t.contactEmail}`} className="btn-orange">{t.contactEmail}</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
