import Head from 'next/head'

const SITE_URL = 'https://krodesign.is'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KRÓ Design',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "KRÓ Design creates souvenirs inspired by Akureyri, Iceland, including keychains and fridge magnets featuring the town's heart-shaped traffic lights.",
  email: 'kro@krodesign.is',
  areaServed: {
    '@type': 'City',
    name: 'Akureyri',
  },
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
