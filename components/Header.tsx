import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslations } from '../lib/useTranslations'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const router = useRouter()
  const { locale, t } = useTranslations()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    router.events.on('routeChangeComplete', closeMenu)
    return () => router.events.off('routeChangeComplete', closeMenu)
  }, [router.events])

  const navLinkClass = 'text-lg font-bold hover:text-kroOrange transition-colors'

  return (
    <header className="bg-white dark:bg-neutral-900 border-b-2 border-black dark:border-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" locale={locale}>
          <img
            src="/KR%C3%93Design-logo.svg"
            alt="KRÓ Design"
            width={96}
            height={96}
            className="h-16 w-16 md:h-24 md:w-24"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" locale={locale} className={navLinkClass}>{t.navHome}</Link>
          <Link href="/products" locale={locale} className={navLinkClass}>{t.navProducts}</Link>
          <Link href="/story" locale={locale} className={navLinkClass}>{t.navStory}</Link>
          <Link href="/contact" locale={locale} className={navLinkClass}>{t.navContact}</Link>
          <ThemeToggle className="w-9 h-9" />
          <Link
            href={router.pathname}
            locale={locale === 'is' ? 'en' : 'is'}
            className="text-lg font-bold px-4 py-1 bg-black text-white hover:bg-kroOrange hover:text-black transition-colors"
          >
            {locale === 'is' ? 'EN' : 'IS'}
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle className="w-8 h-8" />
          <Link
            href={router.pathname}
            locale={locale === 'is' ? 'en' : 'is'}
            className="text-base font-bold px-3 py-1 bg-black text-white hover:bg-kroOrange hover:text-black transition-colors"
          >
            {locale === 'is' ? 'EN' : 'IS'}
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col justify-center gap-1.5 w-10 h-10 shrink-0"
          >
            <span className={`block h-0.5 w-7 bg-black dark:bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-7 bg-black dark:bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-7 bg-black dark:bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 border-t-2 border-black dark:border-white">
          <Link href="/" locale={locale} className={`${navLinkClass} py-3`}>{t.navHome}</Link>
          <Link href="/products" locale={locale} className={`${navLinkClass} py-3`}>{t.navProducts}</Link>
          <Link href="/story" locale={locale} className={`${navLinkClass} py-3`}>{t.navStory}</Link>
          <Link href="/contact" locale={locale} className={`${navLinkClass} py-3`}>{t.navContact}</Link>
        </nav>
      )}
    </header>
  )
}
