import Head from 'next/head'
import Link from 'next/link'
import fs from 'node:fs/promises'
import path from 'node:path'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import ProjectCard from '../../components/ProjectCard'
import Footer from '../../components/Footer'

export async function getStaticProps() {
  const files = await fs.readdir('content/re-materialize')
  const projects = []

  for (const file of files) {
    const { attributes } = await import(`../../content/re-materialize/${file}`)
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
        <title>RE-materialize | Conny Groenewegen</title>
      </Head>
      <div className="mx-[5%] mt-12 max-w-[100rem]">
        <nav>
          <ul>
            <li>
              <Link href="/re-materialize">
                <a className="nav-link nav-link--materialize nav-link--active">
                  RE-<span className="text-materialize">materialize</span>
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
                <a className="nav-link nav-link--couture">
                  RE-<span>couture</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          {/* The nav is visually the 'h1' so we only put this here for SEO */}
          <h1 className="invisible">re-materialize</h1>
          <p className="my-4 max-w-2xl md:text-lg">
            The fabrics are knitted with plastic monofilaments, up-cycled from
            the textile industry. The looped plastic monofilament rhythmically
            creates rigidity, which allows the support and direction to softer
            yarns made of virgin wool and opulent fake fur. The knitted
            monofilament becomes a constructive 3D element in ELECTRIC CO
            designs that graphically accentuates the outlines of the upper
            body’s muscular character. By adhering to the anatomy and turning it
            inside out to create an exoskeleton, the shapes have both a
            futuristic and archaic appearance.
          </p>
          <ul className="mt-12">
            {projects.length > 0 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 200: 1, 500: 2, 768: 3, 1024: 4 }}
              >
                <Masonry gutter="24px">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      rgb={[181, 181, 181]}
                      category="re-materialize"
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <p className="text-lg text-gray-400">No projects yet</p>
            )}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  )
}
