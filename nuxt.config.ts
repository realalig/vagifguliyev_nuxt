// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // plugins: ['~/plugins/lightGallery.js'],
  modules: ['nuxt-swiper'],
  css: ['./assets/css/tooplate_style.css'],
  // modules: ['@nuxt/ui'],
  components: true,
})
