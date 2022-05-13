import Script from 'next/script'
import { attributes, react as HomeContent } from '../content/home.md'

export default function Home() {
  let { title, cats } = attributes
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
