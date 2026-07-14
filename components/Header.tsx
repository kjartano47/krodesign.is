import Link from 'next/link'
import { useRouter } from 'next/router'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'

export default function Header() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" locale={locale}>
          <img src="/KR%C3%93Design-logo.svg" alt="KRÓ Design" className="h-24 w-auto" />
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" locale={locale} className="text-lg font-bold hover:text-kroOrange transition-colors">{t.navHome}</Link>
          <Link href="/products" locale={locale} className="text-lg font-bold hover:text-kroOrange transition-colors">{t.navProducts}</Link>
          <Link href="/story" locale={locale} className="text-lg font-bold hover:text-kroOrange transition-colors">{t.navStory}</Link>
          <Link href="/contact" locale={locale} className="text-lg font-bold hover:text-kroOrange transition-colors">{t.navContact}</Link>
          <Link
            href={router.asPath}
            locale={locale === 'is' ? 'en' : 'is'}
            className="text-lg font-bold px-4 py-1 bg-black text-white hover:bg-kroOrange transition-colors"
          >
            {locale === 'is' ? 'EN' : 'IS'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
