// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
         additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },
  css : [
    '~/assets/style.scss'
  ],
})

