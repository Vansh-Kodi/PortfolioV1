import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

const pageLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/project' },
  { name: 'Blogs', link: '/blog' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  const isActive = (link) => {
    if (link === '/') return pathname === '/'
    return pathname.startsWith(link)
  }

  return (
    <nav className="container relative mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-4 md:px-10" role="navigation">
      <Link
        to="/"
        className="text-3xl font-bold tracking-tight text-zinc-900 transition-colors active:text-blue-600 dark:text-zinc-200 dark:active:text-blue-400 lg:text-4xl"
      >
        <img
          src="https://placehold.co/40x40"
          alt="Profile"
          className="h-10 w-10 rounded-full border border-zinc-200 bg-zinc-50 p-0.5 shadow-lg backdrop-blur dark:border-zinc-600 dark:bg-zinc-700"
        />
      </Link>
      <ul className="hidden items-center gap-6 rounded-full border border-zinc-200 bg-zinc-50 px-6 py-1.5 shadow-lg dark:border-zinc-600 dark:bg-zinc-700 md:inline-flex">
        {pageLinks.map(({ name, link }) => (
          <li key={link}>
            <Link
              to={link}
              className={`${
                isActive(link)
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-zinc-600 dark:text-zinc-400'
              } text-sm font-normal transition-colors active:text-blue-600 dark:active:text-blue-400`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <MobileMenu pageLinks={pageLinks} />
        <ThemeToggle />
      </div>
    </nav>
  )
}
