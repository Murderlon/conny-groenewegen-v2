import Link from 'next/link'
import Image from 'next/image'

import createColoredBase64 from '../lib/createColoredBase64'

export default function Project(props) {
  const { project, category, rgb } = props

  return (
    <li
      className="self-start rounded-md border-2 border-white shadow-md shadow-gray-600"
      key={project.title}
    >
      <Link href={`/${category}/${project.slug}`}>
        <a>
          <h3 className="m-2 font-mono text-xl font-semibold uppercase">
            {project.title}
          </h3>
          <div className="relative">
            <Image
              alt={project.headerImage.alt}
              src={project.headerImage.image}
              layout="raw" // experimental :0
              // random width and height? it doesn't matter?
              width={1000}
              height={100}
              sizes="100vw, (min-width: 700px) 50vw, (min-width: 1100px) 25vw"
              placeholder="blur"
              blurDataURL={createColoredBase64(...rgb)}
            />
          </div>
        </a>
      </Link>
    </li>
  )
}

