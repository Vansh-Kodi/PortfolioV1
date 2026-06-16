import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://vanshkodinariya.vercel.app'

export default function SEO({
  title = 'Portfolio',
  description = 'Personal portfolio website',
  keywords = 'Portfolio, Web Development, Projects, Blogs',
  image = 'https://placehold.co/1200x630',
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        document.head.appendChild(el)
      }
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        el.setAttribute('property', name)
      } else {
        el.setAttribute('name', name)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('author', 'Vansh Kodinariya')
    setMeta('og:site_name', 'Portfolio')
    setMeta('og:title', title)
    setMeta('og:type', 'website')
    setMeta('og:image', `${SITE_URL}${image}`)
    setMeta('og:image:secure_url', `${SITE_URL}${image}`)
    setMeta('og:image:alt', title)
    setMeta('og:description', description)
    setMeta('og:url', `${SITE_URL}${pathname}`)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:image', `${SITE_URL}${image}`)
  }, [title, description, keywords, image, pathname])

  return null
}
