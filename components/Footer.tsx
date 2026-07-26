import Link from 'next/link'
import { useRouter } from 'next/router'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'

export default function Footer() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <footer className="bg-black text-white py-10 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} KRÓ Design. Designed and made in Akureyri.</p>
        <Link href="/privacy" locale={locale} className="text-gray-400 text-sm hover:text-kroOrange transition-colors">
          {t.navPrivacy}
        </Link>
      </div>
    </footer>
  )
}
