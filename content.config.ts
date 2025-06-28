import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'test/**/*.md', // does not work ("**" works)
    }),
  },
})
