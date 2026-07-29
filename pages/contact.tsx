import { useState, type FormEvent } from 'react'
import Seo from '../components/Seo'
import { useTranslations } from '../lib/useTranslations'

export default function Contact() {
  const { t } = useTranslations()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo title={t.metaTitleContact} description={t.metaDescContact} />
      <main className="flex-1">
        <section className="bg-kroOrange py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-black break-words">{t.contactTitle}</h1>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-neutral-900 border-t-2 border-black dark:border-white">
          <div className="max-w-xl mx-auto px-6 text-center">
            <p className="mb-8">{t.contactPrompt}</p>

            {status === 'success' ? (
              <div className="border-2 border-black dark:border-white p-8">
                <h2 className="text-xl font-black mb-2">{t.contactFormSuccessTitle}</h2>
                <p className="text-gray-700 dark:text-gray-300">{t.contactFormSuccessMessage}</p>
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
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
                  <input id="name" name="name" type="text" required className="w-full border-2 border-black dark:border-white bg-white dark:bg-neutral-900 px-4 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold mb-1">{t.contactFormEmailLabel}</label>
                  <input id="email" name="email" type="email" required className="w-full border-2 border-black dark:border-white bg-white dark:bg-neutral-900 px-4 py-2" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold mb-1">{t.contactFormMessageLabel}</label>
                  <textarea id="message" name="message" required rows={5} className="w-full border-2 border-black dark:border-white bg-white dark:bg-neutral-900 px-4 py-2" />
                </div>
                {status === 'error' && <p className="text-red-600 dark:text-red-400">{t.contactFormErrorMessage}</p>}
                <button type="submit" disabled={status === 'submitting'} className="btn-orange disabled:opacity-60">
                  {status === 'submitting' ? t.contactFormSubmitting : t.contactFormSubmit}
                </button>
              </form>
            )}

            <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              {t.contactOrEmailDirectly} <a href={`mailto:${t.contactEmail}`} className="font-bold hover:text-kroOrange">{t.contactEmail}</a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
