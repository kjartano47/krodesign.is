import Seo from '../components/Seo'
import isLocale from '../locales/is.json'
import enLocale from '../locales/en.json'
import { useRouter } from 'next/router'

export default function Contact() {
  const { locale, query } = useRouter()
  const t = locale === 'en' ? enLocale : isLocale
  const submitted = query.success === 'true'

  return (
    <>
      <Seo title={t.metaTitleContact} description={t.metaDescContact} />
      <main className="flex-1 py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.contactTitle}</h1>
          <p className="mb-8">{t.contactPrompt}</p>

          {submitted ? (
            <div className="border-2 border-black p-8">
              <h2 className="text-xl font-black mb-2">{t.contactFormSuccessTitle}</h2>
              <p className="text-gray-700">{t.contactFormSuccessMessage}</p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              netlify-honeypot="bot-field"
              action="?success=true"
              className="text-left space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name" className="block font-bold mb-1">{t.contactFormNameLabel}</label>
                <input id="name" name="name" type="text" required className="w-full border-2 border-black px-4 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold mb-1">{t.contactFormEmailLabel}</label>
                <input id="email" name="email" type="email" required className="w-full border-2 border-black px-4 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block font-bold mb-1">{t.contactFormMessageLabel}</label>
                <textarea id="message" name="message" required rows={5} className="w-full border-2 border-black px-4 py-2" />
              </div>
              <div data-netlify-recaptcha="true" />
              <button type="submit" className="btn-orange">{t.contactFormSubmit}</button>
            </form>
          )}

          <p className="mt-8 text-sm text-gray-600">
            {t.contactOrEmailDirectly} <a href={`mailto:${t.contactEmail}`} className="font-bold hover:text-kroOrange">{t.contactEmail}</a>
          </p>
        </div>
      </main>
    </>
  )
}
