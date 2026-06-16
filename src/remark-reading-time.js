import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
  return (tree, file) => {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    if (file.data.frontmatter) {
      file.data.frontmatter.minutesRead = readingTime.text
    }
  }
}
