import Image from 'next/image'
import Link from 'next/link'
import fs from 'node:fs/promises'
import path from 'node:path'

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export async function getStaticProps() {
  const files = await fs.readdir('content/re-couture')
  const projects = []

  for (const file of files) {
    const { attributes } = await import(`../../content/re-couture/${file}`)
    attributes.slug = path.basename(file, '.md')
    projects.push(attributes)
  }

  return {
    props: { projects },
  }
}

export default function ReCouture(props) {
  const { projects } = props

  return (
    <section className="mx-auto max-w-[60rem] my-12">
      <h1 className="text-8xl font-mono font-semibold uppercase">re-<span className='text-couture'>couture</span></h1>
      <p className='my-4'>
        The fibers and threads I use reassemble the narrative to reach a point where the
        material starts to create a path that follows its own rules. A path travelling
        beyond guidance, storytelling and the cliché, supported by the chant of the
        digital knitting machine and the repetitive rhythm of classic hand sewing.
      </p>
      <ul className="grid gap-4 grid-cols-3 grid-rows-3 mt-12">
        {projects.map((project) => (
          <li className="" key={project.title}>
            <h2 className="my-4 text-2xl font-mono uppercase">
              <Link href={`/re-couture/${project.slug}`}>
                <a>{project.title}</a>
              </Link>
            </h2>
            <div className="relative h-[32rem]">
              <Image
                alt={project.headerImage.alt}
                src={project.headerImage.image}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
                sizes="25vw"
                placeholder="blur"
                blurDataURL={rgbDataURL(252, 40, 30)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
