import Link from 'next/link'

export default function ImageLink({ href, title, image, color }) {
  return (
    <li className="border-blue w-64">
      <h2 className="text-2xl font-bold relative top-4">
        RE-<span className={`text-${color} lowercase`}>{title}</span>
      </h2>
      <img className="h-64 w-64 rounded-full shadow-inner" src={image} />
      <Link href={href}>
        <a
          className={`font-bold relative float-right bottom-10 right-4 rounded-sm bg-${color} p-2 text-sm uppercase text-black`}
        >
          Explore →
        </a>
      </Link>
      <p className="mt-8 text-center uppercase text-sm font-bold  ">{title}</p>
    </li>
  )
}
