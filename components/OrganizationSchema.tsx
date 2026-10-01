import Head from 'next/head'
import { SITE_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../lib/siteConfig'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KRÓ Design',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "KRÓ Design creates lanterns, fidgets, souvenirs and other fun stuff, designed and made in Akureyri, Iceland.",
  email: 'kro@krodesign.is',
  areaServed: {
    '@type': 'City',
    name: 'Akureyri',
  },
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
}

export default function OrganizationSchema() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}
