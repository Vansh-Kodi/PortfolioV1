import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { remarkReadingTime } from './src/remark-reading-time'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkReadingTime,
        remarkMdxFrontmatter,
      ],
    }),
  ],
})
