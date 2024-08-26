import * as prismic from '@prismicio/client'

export const repositoryName = 'MyszaSurf'

export const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.VITE_PRISMIC_API_TOKEN,
})