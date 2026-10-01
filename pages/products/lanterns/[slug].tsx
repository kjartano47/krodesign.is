import { useState } from 'react'
import Seo from '../../../components/Seo'
import FlickerImage from '../../../components/FlickerImage'
import Zoomable from '../../../components/Zoomable'
import Lightbox from '../../../components/Lightbox'
import { useTranslations } from '../../../lib/useTranslations'
import { lanterns, lanternFlickerFrames } from '../../../lib/lanterns'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async ({ locales }) => ({
  paths: (locales ?? ['is']).flatMap((locale) => lanterns.map((l) => ({ params: { slug: l.slug }, locale }))),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lantern = lanterns.find((l) => l.slug === params?.slug)
  if (!lantern) return { notFound: true }
  return { props: { lantern } }
}

export default function LanternDetail({ lantern }: { lantern: (typeof lanterns)[number] }) {
  const { t } = useTranslations()
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const imgClassName = 'imgClassName' in lantern ? lantern.imgClassName : undefined
  const galleryClassName = `w-full aspect-square object-cover border-2 border-black dark:border-white${
    imgClassName ? ' object-[85%_center]' : ''
  }`
  const basePhoto = `/products/lanterns/${lantern.photo}.webp`
  const photo2 = `/products/lanterns/${lantern.photo}-2.webp`
  const photo3 = `/products/lanterns/${lantern.photo}-3.webp`

  return (
    <>
      <Seo title={t[lantern.metaTitleKey]} description={t[lantern.metaDescKey]} />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md mx-auto w-full space-y-4">
            <Zoomable onClick={() => setLightboxSrc(basePhoto)} label={t[lantern.titleKey]}>
              <FlickerImage
                base={basePhoto}
                overlayLayers={lantern.overlayPrefixes.map(lanternFlickerFrames)}
                alt={t[lantern.titleKey]}
                className="w-full aspect-square border-2 border-black dark:border-white"
                imgClassName={imgClassName}
              />
            </Zoomable>
            <div className="grid grid-cols-2 gap-4">
              <Zoomable onClick={() => setLightboxSrc(photo2)} label={t[lantern.titleKey]}>
                <img src={photo2} alt={t[lantern.titleKey]} className={galleryClassName} />
              </Zoomable>
              <Zoomable onClick={() => setLightboxSrc(photo3)} label={t[lantern.titleKey]}>
                <img src={photo3} alt={t[lantern.titleKey]} className={galleryClassName} />
              </Zoomable>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 break-words">{t[lantern.titleKey]}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{t[lantern.descKey]}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t[lantern.sizeKey]}</p>
          </div>
        </div>
      </main>
      <Lightbox src={lightboxSrc} alt={t[lantern.titleKey]} onClose={() => setLightboxSrc(null)} />
    </>
  )
}
