import Link from 'next/link'

export default function ImageLink({ href, title, image, color }) {
  return (
    <li className="border-blue border-2">
      <h2 className="text-xl font-bold">
        RE-<span className={`text-${color} lowercase`}>{title}</span>
      </h2>
      <img className="h-64 w-64 rounded-full" src={image} />
      <Link href={href}>
        <a
          className={`relative left-20 rounded-sm bg-${color} p-2 text-sm uppercase text-black`}
        >
          Explore →
        </a>
      </Link>
      <p>Couture</p>
    </li>
  )
}
