export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GAME",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Store for Globally African Made Exceptional(GAME)",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/lingallery", ssr: false },
    // { src: "~/plugins/vuex-persist", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    ["nuxt-animejs", { client: true }],
    [
      "@nuxtjs/localforage",
      {
        name: "gameOfficial_",
        storeName: "gameOfficialStore_",
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // FIREBASE CONFIG
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCBqQCi_R0-rDQDJfOvTHqrx83sRkG0cDI",
          authDomain: "gameofficial-e51ca.firebaseapp.com",
          projectId: "gameofficial-e51ca",
          storageBucket: "gameofficial-e51ca.appspot.com",
          messagingSenderId: "107814311531",
          appId: "1:107814311531:web:c9f1bc3dd517dac146c32e",
          measurementId: "G-SN7H5NJ89V",
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
        },
      },
    ],
    "@nuxtjs/toast",
  ],

  // GOOGLE FONTS
  googleFonts: {
    families: {
      Monteserrat: true,
      "Fira Mono": true,
      "Press Start 2P": true,
      Lato: true,
      Raleway: true,
    },
    prefetch: true,
    preconnect: true,
    preload: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // PAGE TRANSITION
  // Add global page transition
  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0,
      });
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 250,
        easing: "easeInOutSine",
        complete: done,
      });
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 250,
        easing: "easeInOutSine",
        complete: done,
      });
    },
  },
};
