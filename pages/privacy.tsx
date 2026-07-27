import Seo from '../components/Seo'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'
import { useRouter } from 'next/router'

export default function Privacy() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  return (
    <>
      <Seo title={t.metaTitlePrivacy} description={t.metaDescPrivacy} />
      <main className="flex-1 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{t.privacyPageTitle}</h1>
          <p className="mb-6 text-gray-700">{t.privacyIntro}</p>
          <p className="mb-6 text-gray-700">{t.privacyParagraph1}</p>
          <p className="mb-6 text-gray-700">{t.privacyParagraph2}</p>
          <p className="mb-6 text-gray-700">
            {t.privacyParagraph3}{' '}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-kroOrange"
            >
              {t.privacyNetlifyLinkText}
            </a>
          </p>
          <p className="text-gray-700">
            {t.privacyContactNote} <a href={`mailto:${t.contactEmail}`} className="font-bold hover:text-kroOrange">{t.contactEmail}</a>
          </p>
        </div>
      </main>
    </>
  )
}
