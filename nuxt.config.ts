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
    '~/public/css/bootstrap.css',
    '~/public/css/bootstrap-grid.css',
    '~/assets/style.scss',

  ],
  app: {
    head: {
      script: [
        { src: "~/js/bootstrap.js" },
        { src: "~/js/bootstrap.min.js" },
        { src: "/js/bootstrap.bundle.min.js" },

      ],
    },
  },
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
})

