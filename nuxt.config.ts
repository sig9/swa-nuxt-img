// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',    
  ],
   image: {
     domains: ['wonderful-meadow-0d9011810.3.azurestaticapps.net'],
     dir: 'assets/images'
  },
  nitro: {
    preset: 'azure',
  },
})
