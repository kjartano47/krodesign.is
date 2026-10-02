import fs from 'fs'
import path from 'path'

export function getProductFrames(folder: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'products', folder)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/products/${folder}/${f}`)
}

// small (240px) variants for 80px thumbnail/auto-rotate usage (overview grids, homepage
// cards), so those don't download full-resolution 360 frames just to show a tiny icon
export function getProductThumbFrames(folder: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'products', folder, 'thumb')
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/products/${folder}/thumb/${f}`)
}
