import { useRouter } from 'next/router'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'

export function useTranslations() {
  const { locale } = useRouter()
  return { locale, t: locale === 'en' ? enLocale : isLocale }
}
