import fs from 'node:fs/promises'
import path from 'node:path'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Footer from '../../components/Footer'

import markdownToHTML from '../../lib/markdownToHTML'
import createColoredBase64 from '../../lib/createColoredBase64'

export async function getStaticPaths() {
  const files = await fs.readdir('content/re-space')

  const paths = files.map((file) => ({
    params: { slug: path.basename(file, '.md') },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { attributes } = await import(
    `../../content/re-space/${params.slug}.md`
  )
  const html = await markdownToHTML('re-space', params.slug)

  return { props: { attributes, html } }
}

export default function ReCouture(props) {
  const { attributes, html } = props

  return (
    <>
      <Head>
        <title>{attributes.title} | Conny Groenewegen</title>
      </Head>
      <div className="mx-[5%] mt-12 max-w-[100rem]">
        <nav>
          <ul>
            <li>
              <Link href="/re-space">
                <a className="nav-link nav-link--space">
                  RE-<span>space</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className="font-semibold text-4xl">{attributes.title}</h1>
          <div
            className="my-4 max-w-2xl md:text-lg"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ul className="mt-12">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 200: 1, 500: 2, 800: 3, 1100: 4 }}
            >
              <Masonry gutter="24px">
                {attributes.images.map((image, idx) => (
                  <div key={image.alt || idx} className="relative border-2 border-gray-600 rounded-md overflow-hidden">
                    <Image
                      alt={image.alt}
                      src={image.image}
                      layout="raw" // experimental :0
                      // random width and height? it doesn't matter?
                      width={1000}
                      height={100}
                      sizes="100vw, (min-width: 700px) 50vw, (min-width: 1100px) 25vw"
                      placeholder="blur"
                      blurDataURL={createColoredBase64(186, 186, 160)}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ul>
        </main>
        <Footer />
      </div>
    </>
  )
}
