import Link from 'next/link'
import { useRouter } from 'next/router'
import Seo from '../components/Seo'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'

export default function NotFound() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <>
      <Seo title={t.metaTitle404} description={t.metaDesc404} />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.notFoundTitle}</h1>
          <p className="text-gray-700 mb-8">{t.notFoundDesc}</p>
          <Link href="/" locale={locale} className="btn-orange">
            {t.notFoundCta}
          </Link>
        </div>
      </main>
    </>
  )
}
