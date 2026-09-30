export const souvenirs = [
  { slug: 'keychains', titleKey: 'categoryKippurTitle', descKey: 'categoryKippurDesc', metaTitleKey: 'metaTitleKeychains', metaDescKey: 'metaDescKeychains' },
  { slug: 'fridge-magnets', titleKey: 'categorySeglarTitle', descKey: 'categorySeglarDesc', metaTitleKey: 'metaTitleMagnets', metaDescKey: 'metaDescMagnets' },
  { slug: 'fidget-keychain', titleKey: 'categoryFiktLyklakippaTitle', descKey: 'categoryFiktLyklakippaDesc', metaTitleKey: 'metaTitleFidget', metaDescKey: 'metaDescFidget' },
] as const

export type Souvenir = (typeof souvenirs)[number]
