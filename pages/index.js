import Script from 'next/script'
import Link from 'next/link'
import ImageLink from '../components/ImageLink'

export default function Home() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <nav className="mx-auto mt-16 border-white md:max-w-max">
        <ul className="md:flex md:space-x-20">
          <ImageLink
            href="/re-couture"
            title="Couture"
            image="/assets/06-mg_4190-web.jpg"
            color="couture"
          />
          <ImageLink
            href="/re-materialize"
            title="Materialize"
            image="/assets/02-nugget-coat.jpg"
            color="materialize"
          />
          <ImageLink
            href="/re-space"
            title="Space"
            image="/assets/_05-hw_6119-proto-3-1.jpg"
            color="space"
          />
        </ul>
      </nav>

      <div className="mx-auto min-w-min md:w-2/3">
        <ul className="md:flex">
          <li>
            <h3>FaMa</h3>
            <p className="mb-6">
              Fashion Machine questions the consequences of the fast fashion
              industry and its impact on our environment
            </p>
            <a
              className="border-2 rounded-md p-2 text-sm font-bold uppercase"
              href="http://fashionmachine.org"
              target="_blank"
              rel="noreferrer"
            >
              Go to website
            </a>
          </li>
          <li>
            <h3>Electric Co</h3>
            <p className="mb-6">3D soft tech knitwear designs</p>
            <a
              className="border-2 rounded-md p-2 text-sm font-bold uppercase"
              href="https://electricco.co"
              target="_blank"
              rel="noreferrer"
            >
              Go to website
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
