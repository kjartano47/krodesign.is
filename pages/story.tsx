import Seo from '../components/Seo'
import { useTranslations } from '../lib/useTranslations'

export default function Story() {
  const { locale, t } = useTranslations()

  const newTabHint = locale === 'en' ? ' (opens in new tab)' : ' (opnast í nýjum flipa)'

  const officialLink = {
    href: 'https://www.visitakureyri.is/en/see-and-do/attractions/hearts-of-akureyri',
    text: t.storyLinkOfficial,
  }

  const pressLinks = [
    { href: 'https://www.akureyri.net/is/mannlif/hrikalega-gaman-og-skemmtilega-galid', text: t.storyLink1 },
    { href: 'https://www.akureyri.net/is/frettir/vegagerdin-vill-raudu-hjortun-burt', text: t.storyLink2 },
    { href: 'https://www.visir.is/g/20252744572d/halla-for-seti-blandar-ser-i-gotu-ljosaumraeduna', text: t.storyLink3 },
    { href: 'https://www.visir.is/g/20262899460d/hjartaljosin-ekki-sloppin', text: t.storyLink4 },
    { href: 'https://www.akureyri.net/is/mannlif/hjartad-i-ljosunum-alltaf-vinsaelt', text: t.storyLink5 },
    { href: 'https://www.akureyri.net/is/moya/news/ekkert-ljos-ekkert-hjarta', text: t.storyLink6 },
  ]

  return (
    <>
      <Seo title={t.metaTitleStory} description={t.metaDescStory} />
      <main className="flex-1">
        <section className="bg-kroOrange py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-black break-words">{t.storyPageTitle}</h1>
          </div>
        </section>
        <section className="py-12 sm:py-20 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-3xl mx-auto px-6">
            {t.storyIntro && <p className="mb-6 text-lg">{t.storyIntro}</p>}
            {t.storyParagraph1 && <p className="mb-6 text-gray-700 dark:text-gray-300">{t.storyParagraph1}</p>}
            {t.storyParagraph2 && <p className="mb-6 text-gray-700 dark:text-gray-300">{t.storyParagraph2}</p>}
            {t.storyClosing && <p className="mb-6 text-gray-700 dark:text-gray-300">{t.storyClosing}</p>}
            {t.storyTagline && <p className="mb-10 italic text-sm text-gray-500 dark:text-gray-400">{t.storyTagline}</p>}

            <h2 className="text-2xl font-black mb-6">{t.storyReadMoreTitle}</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <a
                href={officialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border-2 border-black dark:border-white px-5 py-4 font-bold hover:bg-kroOrange hover:text-black active:bg-kroOrange active:text-black transition-colors duration-150"
              >
                <span>
                  {officialLink.text}
                  <span className="sr-only">{newTabHint}</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {t.storyPressNote && <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{t.storyPressNote}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pressLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 border-2 border-black dark:border-white px-5 py-4 font-bold hover:bg-kroOrange hover:text-black active:bg-kroOrange active:text-black transition-colors duration-150"
                >
                  <span>
                    {link.text}
                    <span className="sr-only">{newTabHint}</span>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
