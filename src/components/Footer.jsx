import { Link } from 'react-router-dom'

const pageLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Project', link: '/project' },
  { name: 'Blog', link: '/blog' },
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white py-4 text-center dark:border-zinc-800 dark:bg-zinc-900 print:hidden">
      <div className="container mx-auto max-w-screen-2xl space-y-4 px-5 md:flex md:items-center md:justify-between md:space-y-0 md:px-10">
        <div className="flex items-center justify-center gap-4 md:justify-start">
          {pageLinks.map(({ name, link }) => (
            <Link
              key={link}
              to={link}
              className="text-sm text-zinc-600 transition-colors active:text-blue-600 dark:text-zinc-400 dark:active:text-blue-400 lg:text-base"
            >
              {name}
            </Link>
          ))}
        </div>
        <p className="text-xs font-light text-zinc-600 dark:text-zinc-400 lg:text-sm">
          &copy; {new Date().getFullYear()} Vansh Kodinariya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
