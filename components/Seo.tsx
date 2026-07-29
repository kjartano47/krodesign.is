import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  title: string
  description: string
}

const SITE_URL = 'https://krodesign.is'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export default function Seo({ title, description }: Props) {
  const { asPath, locale } = useRouter()
  const path = asPath === '/' ? '' : asPath
  const pathFor = (loc: string) => `${SITE_URL}${loc === 'en' ? '/en' : ''}${path}`
  const url = pathFor(locale ?? 'is')

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="is" href={pathFor('is')} />
      <link rel="alternate" hrefLang="en" href={pathFor('en')} />
      <link rel="alternate" hrefLang="x-default" href={pathFor('is')} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'is_IS'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  )
}
