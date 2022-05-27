import Script from 'next/script'
import Link from 'next/link'
// import markdownToHTML from "../lib/markdownToHTML";

export default function Home() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <nav className="mx-auto mt-16 border-2 border-white md:max-w-max">
        <ul className="md:flex md:space-x-20">
          <li className="">
            <h2 className="text-xl font-bold">
              RE-<span className="text-couture">couture</span>
            </h2>
            <img
              className="h-64 w-64 rounded-full"
              src="/assets/06-mg_4190-web.jpg"
            />
            <Link href="/re-couture">
              <a className="rounded-sm bg-couture p-1 text-sm uppercase text-black">
                Explore →
              </a>
            </Link>
            <p>Couture</p>
          </li>
          <li className="">
            <h2 className="text-xl font-bold">
              RE-<span className="text-materialize">materialize</span>
            </h2>
            <img
              className="h-64 w-64 rounded-full"
              src="/assets/02-nugget-coat.jpg"
            />
            <Link href="/re-materialize">
              <a className="rounded-sm bg-materialize p-1 text-sm uppercase text-black">
                Explore →
              </a>
            </Link>
            <p>Materialize</p>
          </li>
          <li className="">
            <h2 className="text-xl font-bold">
              RE-<span className="text-space">space</span>
            </h2>
            <img
              className="h-64 w-64 rounded-full"
              src="/assets/_05-hw_6119-proto-3-1.jpg"
            />
            <Link href="/re-space">
              <a className="rounded-sm bg-space p-1 text-sm uppercase text-black">
                Explore →
              </a>
            </Link>
            <p>Space</p>
          </li>
        </ul>
      </nav>

      <div className="min-w-1/3 mx-auto max-w-full">
        <ul>
          <li>
            <h3>FaMa</h3>
            <p>
              Fashion Machine questions the consequences of the fast fashion
              industry and its impact on our environment
            </p>
            <a
              href="http://fashionmachine.org"
              target="_blank"
              rel="noreferrer"
            >
              Go to website
            </a>
          </li>
          <li>
            <h3>Electric Co</h3>
            <p>3D soft tech knitwear designs</p>
            <a href="https://electricco.co" target="_blank" rel="noreferrer">
              Go to website
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
