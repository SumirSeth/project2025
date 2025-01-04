// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxt/image'
  ],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom' : {
            initial : {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible : {
              scale: 1,
              opacity: 1,
              y: 0
            }
          }
        }
      }
    }
  }
})