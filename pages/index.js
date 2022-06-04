import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import coutureImage from '../public/assets/06-mg_4190-web.jpg'
import spaceImage from '../public/assets/_01-hw_6109-proto1-1.jpg'
import materializeImage from '../public/assets/materialize-preview.jpg'

function Category(props) {
  const { category, textClass, bgClass, children } = props

  return (
    <li className="mx-auto md:mx-0 mt-12 w-[20em]">
      <h2 className="relative top-4 z-10 -mb-4 font-mono text-4xl font-semibold">
        RE-<span className={textClass}>{category}</span>
      </h2>
      <div className="image-shadow-inset">{children}</div>
      <div className="relative z-10 -mt-4 flex justify-end">
        <Link href={`/re-${category}`}>
          <a
            className={`mr-4 rounded ${bgClass} p-2 text-right uppercase text-black`}
          >
            Explore →
          </a>
        </Link>
      </div>
    </li>
  )
}

export default function Home() {
  return (
    <div className="m-12 max-w-[80em] mx-auto">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <Head>
        <title>Conny Groenewegen</title>
      </Head>

      <main>
        <div className=''>
        <h1 className="text-5xl lg:text-8xl font-semibold">Conny Groenewegen</h1>
        <p className="my-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>

        <nav>
          <ul className="flex flex-col md:flex-row md:justify-between">
            <Category
              category="couture"
              textClass="text-couture"
              bgClass="bg-couture"
            >
              <Image
                alt="Fashion by Conny Groenewegen"
                src={coutureImage}
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                placeholder="blur"
                style={{ borderRadius: '50%' }}
              />
            </Category>

            <Category
              category="space"
              textClass="text-space"
              bgClass="bg-space"
            >
              <Image
                alt="Exhibitions by Conny Groenewegen"
                src={spaceImage}
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                placeholder="blur"
                style={{ borderRadius: '50%' }}
              />
            </Category>

            <Category
              category="materialize"
              textClass="text-materialize"
              bgClass="bg-materialize"
            >
              <Image
                alt="Fabrics by Conny Groenewegen"
                src={materializeImage}
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                placeholder="blur"
                style={{ borderRadius: '50%' }}
              />
            </Category>
          </ul>
        </nav>

        <div className="mx-auto md:mx-0 max-w-md">
          <h2 className="mt-12 text-4xl">Organisations</h2>
          <p className="my-2">something something explanation </p>
        </div>

        <div className="mx-auto md:mx-0 grid md:grid-cols-2 max-w-md md:max-w-2xl gap-4">
          <article className="mt-12 flex gap-4">
            <div>
              <div className="video-shadow-inset relative h-24 w-24">
                <video
                  autoPlay
                  loop
                  className="h-full w-full self-start rounded-full object-cover"
                  src="/assets/fama.mp4"
                ></video>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">FaMa</h3>
              <p className="mb-6">
                Fashion Machine questions the consequences of the fast fashion
                industry and its impact on our environment
              </p>
              <a
                className="rounded-md border-2 p-2 text-sm uppercase"
                href="http://fashionmachine.org"
                target="_blank"
                rel="noreferrer"
              >
                Go to website →
              </a>
            </div>
          </article>

          <article className="my-12 flex gap-4">
            <div>
              <div className="video-shadow-inset relative h-24 w-24">
                <video
                  autoPlay
                  loop
                  className="h-24 w-24 self-start rounded-full object-cover"
                  src="/assets/electricco.mp4"
                ></video>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Electric Co</h3>
              <p className="mb-6">3D soft tech knitwear designs</p>
              <a
                className="rounded-md border-2 p-2 text-sm uppercase"
                href="https://electricco.co"
                target="_blank"
                rel="noreferrer"
              >
                Go to website →
              </a>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
