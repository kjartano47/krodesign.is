import Header from '../components/Header'
import Hero from '../components/Hero'
import CategoryPreview from '../components/CategoryPreview'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'

export default function Home() {
  const { locale } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale

  const categories = [
    { slug: 'keychains', title: t.categoryKippurTitle, desc: t.categoryKippurDesc },
    { slug: 'fridge-magnets', title: t.categorySeglarTitle, desc: t.categorySeglarDesc }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero title={t.heroTagline} subtitle={t.heroIntro} />
        <CategoryPreview categories={categories} title={t.categoriesTitle} />
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="w-8 h-1 bg-kroOrange mb-6"></div>
            <h3 className="text-3xl font-black mb-4">{t.brandStoryTitle}</h3>
            <p className="text-gray-500 text-lg leading-relaxed">{t.brandStory}</p>
          </div>
        </section>
        <section className="py-20 bg-kroOrange text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-black mb-4">{t.featuredTitle}</h3>
            <p className="text-orange-100 text-lg leading-relaxed">{t.featuredDesc}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
