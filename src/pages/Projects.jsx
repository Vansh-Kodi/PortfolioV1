import SEO from '../components/SEO'
import Card from '../components/Card'

const projectModules = import.meta.glob('../content/project/*.mdx', { eager: true })

export default function Projects() {
  const projects = Object.entries(projectModules)
    .map(([path, mod]) => ({
      ...mod.frontmatter,
      href: '/project/' + path.split('/').pop().replace('.mdx', ''),
      github: mod.frontmatter.github || '',
      link: mod.frontmatter.link || '',
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <>
      <SEO
        title="Project - Portfolio"
        description="Projects"
        keywords="Portfolio, Web Development, Projects"
      />
      <main className="mx-auto max-w-screen-2xl space-y-2 px-5 py-12 lg:space-y-4 lg:py-24 lg:px-10">
        <section className="prose prose-zinc dark:prose-invert lg:prose-lg">
          <h1>Projects I've built and contributed to.</h1>
          <p>
            I've worked on a variety of projects over the years. Many are
            open-source — if something catches your interest, feel free to
            explore the code and contribute.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.href}
              type="project"
              title={project.title}
              excerpt={project.excerpt}
              cover={project.cover}
              createdAt={project.createdAt}
              href={project.href}
              github={project.github}
              link={project.link}
            />
          ))}
        </section>
      </main>
    </>
  )
}
