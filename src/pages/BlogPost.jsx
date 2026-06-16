import { useParams, Navigate } from 'react-router-dom'
import { useMemo } from 'react'
import SEO from '../components/SEO'

const blogModules = import.meta.glob('../content/blog/*.mdx', { eager: true })

export default function BlogPost() {
  const { slug } = useParams()

  const { default: Content, frontmatter } = useMemo(() => {
    const match = Object.entries(blogModules).find(
      ([path]) => path.split('/').pop().replace('.mdx', '') === slug
    )
    return match ? match[1] : {}
  }, [slug])

  if (!Content) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <SEO
        title={`${frontmatter.title} - Portfolio`}
        description={frontmatter.excerpt}
        keywords={frontmatter.keywords}
        image={frontmatter.cover}
      />
      <main className="mx-auto max-w-screen-2xl px-5 py-12 lg:py-24 lg:px-10">
        <p className="mx-auto mb-2 max-w-prose lg:mb-4 lg:text-lg">
          <span className="border-l-2 border-zinc-200 pl-2 text-sm font-light text-zinc-600 dark:border-zinc-600 dark:text-zinc-400 lg:text-base">
            {frontmatter.createdAt} &bull; {frontmatter.minutesRead}
          </span>
        </p>
        <article className="prose prose-zinc mx-auto prose-a:font-medium prose-a:decoration-blue-600 prose-a:underline-offset-4 hover:prose-a:decoration-2 prose-pre:rounded-lg prose-img:aspect-video prose-img:w-full prose-img:rounded-lg prose-img:object-cover dark:prose-invert dark:prose-a:decoration-blue-400 lg:prose-lg">
          <section>
            <h1 className="text-blue-600 dark:text-blue-400">{frontmatter.title}</h1>
            <p>{frontmatter.excerpt}</p>
          </section>
          <img
            src={frontmatter.cover}
            alt={frontmatter.title}
            className="border border-zinc-200 shadow-lg dark:border-zinc-600"
          />
          <Content />
        </article>
      </main>
    </>
  )
}
