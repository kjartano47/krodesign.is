import Link from 'next/link'
import SocialLinks from './SocialLinks'
import { useTranslations } from '../lib/useTranslations'

export default function Footer() {
  const { locale, t } = useTranslations()

  return (
    <footer className="bg-black text-white py-10 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} KRÓ Design. {t.heroTagline}.</p>
        <div className="flex items-center gap-6">
          <SocialLinks className="text-gray-400" />
          <Link href="/privacy" locale={locale} className="text-gray-400 text-sm hover:text-kroOrange transition-colors">
            {t.navPrivacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
