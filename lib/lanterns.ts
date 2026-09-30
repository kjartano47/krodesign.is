export const lanternFlickerFrames = (prefix: string) =>
  Array.from({ length: 8 }, (_, i) => `/products/lanterns/${prefix}-flicker-${i}.webp`)

export const lanterns = [
  {
    slug: 'lighthouse',
    photo: 'viti',
    overlayPrefixes: ['viti-top', 'viti-bottom'],
    titleKey: 'categoryVitiTitle',
    descKey: 'categoryVitiDesc',
    sizeKey: 'categoryVitiSize',
    metaTitleKey: 'metaTitleViti',
    metaDescKey: 'metaDescViti',
  },
  {
    slug: 'akureyrarkirkja',
    photo: 'akureyrarkirkja',
    overlayPrefixes: ['akureyrarkirkja'],
    titleKey: 'categoryAkureyrarkirkjaTitle',
    descKey: 'categoryAkureyrarkirkjaDesc',
    sizeKey: 'categoryAkureyrarkirkjaSize',
    metaTitleKey: 'metaTitleAkureyrarkirkja',
    metaDescKey: 'metaDescAkureyrarkirkja',
    imgClassName: 'w-full h-full object-cover object-[85%_center]',
  },
  {
    slug: 'igloo',
    photo: 'snjohus',
    overlayPrefixes: ['snjohus'],
    titleKey: 'categorySnjohusTitle',
    descKey: 'categorySnjohusDesc',
    sizeKey: 'categorySnjohusSize',
    metaTitleKey: 'metaTitleSnjohus',
    metaDescKey: 'metaDescSnjohus',
  },
] as const

export type Lantern = (typeof lanterns)[number]
