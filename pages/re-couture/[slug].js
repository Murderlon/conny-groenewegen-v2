import fs from 'node:fs/promises'
import path from 'node:path'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export async function getStaticPaths() {
  const files = await fs.readdir('content/re-couture')

  const paths = files.map((file) => ({
    params: { slug: path.basename(file, '.md') },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { attributes } = await import(`../../content/re-couture/${params.slug}.md`)
  // Stupid that we have to do this because we can't pass a React component to props
  const html = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(await fs.readFile(`content/re-couture/${params.slug}.md`))

  return { props: { project: { attributes, html: String(html) } } }
}

export default function ReCouture(props) {
  const { project } = props

  return (
    <>
      <h1 className="text-4xl">{project.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </>
  )
}
