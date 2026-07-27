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
