import Head from 'next/head'
import Link from 'next/link'
import fs from 'node:fs/promises'
import path from 'node:path'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import ProjectCard from '../../components/ProjectCard'
import Footer from '../../components/Footer'

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
    <>
      <Head>
        <title>RE-couture | Conny Groenewegen</title>
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
                <a className="nav-link nav-link--space">
                  RE-<span>space</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/re-couture">
                <a className="nav-link nav-link--couture nav-link--active">
                  RE-<span className="text-couture">couture</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          {/* The nav is visually the 'h1' so we only put this here for SEO */}
          <h1 className="invisible">re-couture</h1>
          <p className="my-4 max-w-2xl md:text-lg">
            The fibers and threads I use reassemble the narrative to reach a
            point where the material starts to create a path that follows its
            own rules. A path travelling beyond guidance, storytelling and the
            cliché, supported by the chant of the digital knitting machine and
            the repetitive rhythm of classic hand sewing.
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
                    rgb={[252, 40, 30]}
                    category="re-couture"
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
