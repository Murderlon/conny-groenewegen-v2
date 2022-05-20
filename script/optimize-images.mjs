import { ImagePool } from '@squoosh/lib'
import { cpus } from 'node:os'
import fs from 'node:fs/promises'

const imagePool = new ImagePool(cpus().length)
const images = await fs.readdir(new URL('../public/assets', import.meta.url))
const cacheURL = new URL('cache.json', import.meta.url)
const cache = JSON.parse(await fs.readFile(cacheURL, 'utf8'))
const encodeOptions = { mozjpeg: {}, jxl: { quality: 80 } }

for (const image of images) {
  if (!cache.optimized.includes(image)) {
    try {
      const file = await fs.readFile(new URL(`../public/assets/${image}`, import.meta.url))
      const ref = imagePool.ingestImage(file)

      await ref.encode(encodeOptions)

      const result = await ref.encodedWith.mozjpeg

      await fs.writeFile(new URL(`../public/assets/${image}`, import.meta.url), result.binary)

      console.log('Optimized: ', image)
      cache.optimized.push(image)
    } catch (err) {
      await imagePool.close()
      console.error(err)
      process.exit(1)
    } finally {
      await fs.writeFile(cacheURL, JSON.stringify(cache, null, 2))
    }
  }
}

await imagePool.close()
