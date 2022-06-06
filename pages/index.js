import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import coutureImage from '../public/assets/06-mg_4190-web.jpg'
import spaceImage from '../public/assets/_01-hw_6109-proto1-1.jpg'
import materializeImage from '../public/assets/materialize-preview.jpg'

function Category(props) {
  const { category, text, textClass, bgClass, children } = props

  return (
    <li className="mx-auto mt-12 w-[20em] md:mx-0">
      <div className="relative z-10 -mb-12">
        <h2 className="font-mono text-4xl font-semibold">
          RE-<span className={textClass}>{category}</span>
        </h2>
        <p className="mb-4 text-gray-500">{text}</p>
        <div className="flex">
          <Link href={`/re-${category}`}>
            <a
              className={`mr-4 rounded shadow-lg ${bgClass} p-2 text-right uppercase text-black`}
            >
              Explore →
            </a>
          </Link>
        </div>
      </div>
      <div className="image-shadow-inset -mt-8">{children}</div>
    </li>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-12">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <Head>
        <title>Conny Groenewegen</title>
      </Head>

      <main>
        <div className="">
          <h1 className="text-5xl font-semibold lg:text-8xl">
            Conny Groenewegen
          </h1>
          <p className="my-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <nav>
          <ul className="">
            <div className="flex flex-col justify-between md:flex-row">
              <Category
                category="couture"
                textClass="text-couture"
                bgClass="bg-couture"
                text="High-end, experimental fashion"
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
                text="Exhibitions and installations"
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
            </div>

            <div className="-mt-8 flex justify-center">
              <Category
                category="materialize"
                textClass="text-materialize"
                bgClass="bg-materialize"
                text="Uniquely made fabrics"
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
            </div>
          </ul>
        </nav>

        <div className="mx-auto max-w-md md:mx-0">
          <h2 className="mt-12 text-4xl">Organisations</h2>
          <p className="my-2">something something explanation </p>
        </div>

        <div className="grid gap-4 md:mx-0 md:grid-cols-2">
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
