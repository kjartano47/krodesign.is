import Header from '../components/Header'
import Footer from '../components/Footer'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'
import { useRouter } from 'next/router'

export default function Story() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  const readMoreLinks = [
    { href: 'https://www.akureyri.net/is/mannlif/hrikalega-gaman-og-skemmtilega-galid', text: t.storyLink1 },
    { href: 'https://www.akureyri.net/is/frettir/vegagerdin-vill-raudu-hjortun-burt', text: t.storyLink2 },
    { href: 'https://www.visir.is/g/20252744572d/halla-for-seti-blandar-ser-i-gotu-ljosaumraeduna', text: t.storyLink3 },
    { href: 'https://www.visir.is/g/20262899460d/hjartaljosin-ekki-sloppin', text: t.storyLink4 },
    { href: 'https://www.akureyri.net/is/mannlif/hjartad-i-ljosunum-alltaf-vinsaelt', text: t.storyLink5 },
    { href: 'https://www.akureyri.net/is/moya/news/ekkert-ljos-ekkert-hjarta', text: t.storyLink6 },
  ]

  return (
    <div>
      <Header />
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{t.storyPageTitle}</h1>
          {t.storyIntro && <p className="mb-6 text-lg">{t.storyIntro}</p>}
          {t.storyParagraph1 && <p className="mb-6 text-gray-700">{t.storyParagraph1}</p>}
          {t.storyParagraph2 && <p className="mb-6 text-gray-700">{t.storyParagraph2}</p>}
          {t.storyClosing && <p className="mb-6 text-gray-700">{t.storyClosing}</p>}
          {t.storyTagline && <p className="mb-10 italic text-sm text-gray-500">{t.storyTagline}</p>}

          <h2 className="text-2xl font-black mb-6">{t.storyReadMoreTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {readMoreLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border-2 border-black px-5 py-4 font-bold hover:bg-kroOrange transition-colors duration-150"
              >
                <span>{link.text}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
