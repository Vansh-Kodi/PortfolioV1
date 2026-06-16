import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import BlogCard from '../components/BlogCard'
import ProjectCard from '../components/ProjectCard'

const blogModules = import.meta.glob('../content/blog/*.mdx', { eager: true })
const projectModules = import.meta.glob('../content/project/*.mdx', { eager: true })

const featuredProjectSlugs = ['sample-project-1', 'sample-project-2']

const workExperience = [
  {
    logo: 'https://placehold.co/48x48',
    name: 'Ye Olde Code Shoppe',
    designation: 'Professional Bug Manufacturer',
    from: '2024',
    to: "present (they haven't noticed)",
  },
  {
    logo: 'https://placehold.co/48x48',
    name: 'Ctrl+Alt+Elite Inc.',
    designation: 'Senior Stack Overflow Copy-Paster',
    from: '2023',
    to: '2024 (resigned to touch grass)',
  },
]

export default function Home() {
  const blogs = Object.entries(blogModules)
    .map(([path, mod]) => ({
      ...mod.frontmatter,
      href: '/blog/' + path.split('/').pop().replace('.mdx', ''),
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2)

  const projects = Object.entries(projectModules)
    .filter(([path]) => {
      const slug = path.split('/').pop().replace('.mdx', '')
      return featuredProjectSlugs.includes(slug)
    })
    .map(([path, mod]) => ({
      ...mod.frontmatter,
      href: '/project/' + path.split('/').pop().replace('.mdx', ''),
    }))

  return (
    <>
      <SEO
        title="Portfolio"
        description="Personal portfolio website"
        keywords="Portfolio, Web Development, Projects, Blogs"
      />
      <main className="mx-auto max-w-screen-2xl space-y-16 px-5 py-12 lg:space-y-24 lg:py-24 lg:px-10">
        <section className="grid grid-cols-1 space-y-4 lg:grid-cols-2">
          <img
            src="https://placehold.co/288x288"
            alt="Profile"
            className="aspect-square h-32 rounded-full border-2 border-blue-600 object-cover p-1 shadow-lg dark:border-blue-400 sm:h-56 sm:p-2 lg:h-72 lg:place-self-center"
          />
          <div className="space-y-2 lg:space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 xl:text-5xl">
              Backend Developer & Student
            </h1>
            <p className="prose prose-zinc dark:prose-invert lg:prose-lg">
              Hi, I'm Vansh Kodinariya. A backend developer, currently studying.
              This is my personal website, where you will find the
              projects and ideas I am currently exploring.{' '}
              <Link
                to="/about"
                className="inline-flex items-center gap-1 font-medium text-blue-600 underline-offset-2 hover:decoration-2 dark:text-blue-400"
              >
                <span>More about me</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 lg:h-5 lg:w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com" aria-label="GitHub">
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="h-6 w-6 text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 lg:h-8 lg:w-8">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in" aria-label="LinkedIn">
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="h-6 w-6 text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 lg:h-8 lg:w-8">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com" aria-label="Twitter">
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="h-6 w-6 text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 lg:h-8 lg:w-8">
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com" aria-label="Instagram">
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="h-6 w-6 text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 lg:h-8 lg:w-8">
                  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col items-center lg:col-span-2 lg:col-start-4 lg:row-span-2">
            <div className="space-y-8 rounded-lg border border-zinc-200 p-4 dark:border-zinc-600">
              <p className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-200 lg:text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-blue-600 dark:text-blue-400 lg:h-6 lg:w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                <span>Work</span>
              </p>
              <p className="-mt-4 text-xs italic text-zinc-400 dark:text-zinc-500">* These are placeholders</p>
              <div className="space-y-4">
                {workExperience.map(({ logo, name, designation, from, to }) => (
                  <p key={name} className="flex items-center gap-2">
                    <span className="aspect-square w-10 flex-shrink-0 rounded-full border border-zinc-200 bg-zinc-50 p-0.5 dark:border-zinc-600 dark:bg-zinc-700 lg:w-12 lg:p-1">
                      <img src={logo} alt={name} className="h-full w-full rounded-full bg-white object-scale-down" />
                    </span>
                    <span className="flex-grow">
                      <span className="block text-zinc-900 dark:text-zinc-200 lg:text-lg">{name}</span>
                      <span className="flex flex-col text-sm font-light text-zinc-600 dark:text-zinc-400 lg:flex-row lg:items-center lg:justify-between lg:text-base">
                        <span>{designation}</span>
                        <span>{from} &mdash; {to}</span>
                      </span>
                    </span>
                  </p>
                ))}
              </div>
              <a
                href="mailto:vansh@vanshkodi.in"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-100 py-2 text-sm font-semibold text-blue-700 transition-colors active:bg-blue-300 dark:bg-zinc-800 dark:text-blue-400 dark:active:bg-zinc-700 lg:text-base"
              >
                <span>Reach out via email</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 lg:h-5 lg:w-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-2 lg:col-span-3 lg:row-start-1 lg:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 xl:text-4xl">
              Recent Blogs
            </h2>
            <div className="space-y-2 lg:space-y-4">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.href}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  createdAt={blog.createdAt}
                  minutesRead={blog.minutesRead}
                  collection={blog.collection}
                  href={blog.href}
                />
              ))}
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 px-4 text-sm font-semibold text-zinc-50 transition-colors active:bg-blue-700 dark:bg-blue-500 dark:active:bg-blue-600 lg:px-6 lg:text-base"
            >
              <span>View more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 lg:h-5 lg:w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-2 lg:col-span-3 lg:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 xl:text-4xl">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
              {projects.map((project) => (
                <ProjectCard
                  key={project.href}
                  logo={project.logo}
                  title={project.title}
                  excerpt={project.excerpt}
                  href={project.href}
                  github={project.github}
                  link={project.link || ''}
                />
              ))}
            </div>
            <Link
              to="/project"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 px-4 text-sm font-semibold text-zinc-50 transition-colors active:bg-blue-700 dark:bg-blue-500 dark:active:bg-blue-600 lg:px-6 lg:text-base"
            >
              <span>View more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 lg:h-5 lg:w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
