import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <nav>
        <ul>
          <li>
            <Link href="/re-couture">
              <a>re-couture</a>
            </Link>
          </li>
          <li>
            <Link href="/re-materialize">
              <a>re-materialize</a>
            </Link>
          </li>
          <li>
            <Link href="/re-space">
              <a>re-space</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
