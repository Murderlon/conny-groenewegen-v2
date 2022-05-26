import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 w-full rounded-t-md border-2 border-b-0 border-gray-600 bg-gray-900 p-8 font-mono text-gray-400 shadow-md shadow-gray-600">
      <div className="flex flex-wrap justify-between">
        <div>
          <h2 className="text-xl font-semibold ">Conny Groenewegen</h2>
          <section>
            <ul className="my-4 flex flex-col md:flex-row">
              <li>
                <Link href="/">
                  <a className="footer-link">/</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="footer-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/re-materialize">
                  <a className="footer-link footer-link--materialize">
                    RE-<span>materialize</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/re-space">
                  <a className="footer-link footer-link--space">
                    RE-<span>space</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/re-couture">
                  <a className="footer-link footer-link--couture">
                    RE-<span className="">couture</span>
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <h2 className="text-xl font-semibold ">Organisations</h2>
          <section>
            <ul className="my-4 flex flex-col md:flex-row">
              <li>
                <Link href="http://fashionmachine.org/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    FaMa
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://electricco.co/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Electric Co
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  )
}
