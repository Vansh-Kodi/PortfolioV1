import SEO from '../components/SEO'
import Card from '../components/Card'

const blogModules = import.meta.glob('../content/blog/*.mdx', { eager: true })

export default function Blog() {
  const blogs = Object.entries(blogModules)
    .map(([path, mod]) => ({
      ...mod.frontmatter,
      href: '/blog/' + path.split('/').pop().replace('.mdx', ''),
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <>
      <SEO
        title="Blog - Portfolio"
        description="Blog posts"
        keywords="Portfolio, Web Development, Projects, Blogs"
      />
      <main className="mx-auto max-w-screen-2xl space-y-2 px-5 py-12 lg:space-y-4 lg:py-24 lg:px-10">
        <section className="prose prose-zinc dark:prose-invert lg:prose-lg">
          <h1>Writing on React, design systems, and web development.</h1>
          <p>
            All of my long-form thoughts on programming, react, design systems,
            and more, collected in one place.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogs.map((blog) => (
            <Card
              key={blog.href}
              type="blog"
              title={blog.title}
              excerpt={blog.excerpt}
              cover={blog.cover}
              createdAt={blog.createdAt}
              minutesRead={blog.minutesRead}
              collection={blog.collection}
              href={blog.href}
            />
          ))}
        </section>
      </main>
    </>
  )
}
