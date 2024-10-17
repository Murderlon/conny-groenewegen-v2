import Head from 'next/head'
import Link from 'next/link'
import fs from 'node:fs/promises'
import path from 'node:path'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import ProjectCard from '../../components/ProjectCard'
import Footer from '../../components/Footer'

export async function getStaticProps() {
  const files = await fs.readdir('content/re-space')
  const projects = []

  for (const file of files) {
    const { attributes } = await import(`../../content/re-space/${file}`)
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
    <>
      <Head>
        <title>Conny Groenewegen | RE-space</title>
      </Head>
      <div className="mx-[5%] mt-12 max-w-[100rem]">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className="nav-link">/</a>
              </Link>
            </li>
            <li>
              <Link href="/re-materialize">
                <a className="nav-link nav-link--materialize">
                  RE-<span>materialize</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/re-space">
                <a className="nav-link nav-link--space nav-link--active">
                  RE-<span className="text-space">space</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/re-couture">
                <a className="nav-link nav-link--couture ">
                  RE-<span>couture</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          {/* The nav is visually the 'h1' so we only put this here for SEO */}
          <h1 className="invisible">re-space</h1>
          <p className="my-4 max-w-2xl md:text-lg">
            My spatial machines, derived from the age-old artisanal practices of
            knitting and knotting reload public spaces with purpose and meaning.
            When put to work, these structures create relationships with the
            spaces they are placed in and stimulate our creative potential,
            enabling us to actively reconnect with the new conditions for this
            environment.
          </p>
          <ul className="mt-12">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 200: 1, 500: 2, 768: 3, 1024: 4 }}
            >
              <Masonry gutter="24px">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    rgb={[186, 186, 160]}
                    category="re-space"
                  />
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
