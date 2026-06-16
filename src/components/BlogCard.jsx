import { Link } from 'react-router-dom'

export default function BlogCard({ title, excerpt, createdAt, href, collection, minutesRead }) {
  return (
    <Link
      to={href}
      className="group block space-y-1 rounded-lg py-4 transition-colors lg:-ml-4 lg:space-y-2 lg:p-4 lg:hover:bg-blue-100 lg:dark:hover:bg-zinc-800"
    >
      <span className="border-l-2 border-zinc-200 pl-2 text-xs font-light text-zinc-600 transition-colors group-hover:border-blue-600 dark:border-zinc-600 dark:text-zinc-400 dark:group-hover:border-blue-400 lg:text-sm">
        {collection} &bull; {createdAt} &bull; {minutesRead}
      </span>
      <span className="block text-2xl font-semibold tracking-tight text-zinc-900 transition-colors group-active:text-blue-600 dark:text-zinc-200 dark:group-active:text-blue-400 xl:text-3xl">
        {title}
      </span>
      <span className="prose prose-zinc block dark:prose-invert lg:prose-lg">
        {excerpt}
      </span>
      <span className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 lg:text-base">
        <span>Read blog</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 stroke-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </Link>
  )
}
