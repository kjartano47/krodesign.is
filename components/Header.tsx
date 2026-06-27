import Link from 'next/link'
import { useRouter } from 'next/router'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'

export default function Header() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" locale={locale}>
          <img src="/logo.svg" alt="KRÓ Design" className="h-28 w-28" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" locale={locale} className="text-base font-medium hover:text-kroOrange transition-colors">{t.navHome}</Link>
          <Link href="/products/keychains" locale={locale} className="text-base font-medium hover:text-kroOrange transition-colors">{t.navKeychains}</Link>
          <Link href="/products/fridge-magnets" locale={locale} className="text-base font-medium hover:text-kroOrange transition-colors">{t.navMagnets}</Link>
          <Link href="/contact" locale={locale} className="text-base font-medium hover:text-kroOrange transition-colors">{t.navContact}</Link>
          <Link
            href={router.asPath}
            locale={locale === 'is' ? 'en' : 'is'}
            className="text-base font-medium px-3 py-1 border border-gray-300 rounded hover:border-kroOrange hover:text-kroOrange transition-colors"
          >
            {locale === 'is' ? 'EN' : 'IS'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
