import Link from 'next/link'
import Image from 'next/image'

import createColoredBase64 from '../lib/createColoredBase64'

export default function Project(props) {
  const { project, category, rgb } = props

  const tagBorderColor =
    category === 're-couture'
      ? 'border-couture'
      : category === 're-space'
      ? 'border-space'
      : 'border-materialize'

  return (
    <li
      className="self-start rounded-md border-2 border-gray-600"
      key={project.title}
    >
      <Link href={`/${category}/${project.slug}`}>
        <a>
          <h3 className="border-b-2 border-gray-600 p-2 font-mono text-lg font-semibold uppercase">
            {project.title}
          </h3>
          <div className="relative">
            <div className="absolute bottom-4 left-[-2px] font-mono text-sm">
              {project.tags
                ? project.tags.map(({ tag }) => (
                    <p
                      key={tag}
                      className={`rounded-r-md border-l-2 ${tagBorderColor} bg-black p-1 text-white shadow-md shadow-gray-800`}
                    >
                      {tag}
                    </p>
                  ))
                : null}
            </div>
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
