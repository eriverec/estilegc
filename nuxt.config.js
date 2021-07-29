export default {
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: 'Home',
    titleTemplate: 'Ragazza Stile | %s',

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Has tus compras aquí"
      },
      {
        name: 'google-site-verification',
        content: '0-e9NSNjEXcjZOpIuFrw5nDPQU4i9-WAATcsBmEkkMQ'
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Questrial&display=swap"
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-195306092-1',
        async: true
      },
    

    ],
  },



  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#333" },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/resetr.css",
    "@/assets/css/common.css",
    "@/assets/css/main.css",
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',

  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/prismicLinks", ssr: false },
    { src: "~/plugins/vue-slick-carousel" },
    { src: "~/plugins/vue-backtotop", ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic",
    ['bootstrap-vue/nuxt', {
      icons: true,
    }],
    '@nuxtjs/google-analytics',
    'vue-social-sharing/nuxt',
  ],

  googleAnalytics: {
    id: 'UA-195306092-1'
  },


  prismic: {
    endpoint: "https://estilegc.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer",
    preview: false
  },


  components: true,

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },

  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  }
};
