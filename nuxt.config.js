import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tvbronswijk.nl',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Image module configuration: https://image.nuxtjs.org/getting-started/installation#configuration
  image: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new HtmlWebpackPlugin({
        minify: false,
      }),
      new FaviconsWebpackPlugin({
        logo: './icon.svg',
        prefix: '/static',
        mode: 'webapp',
        devMode: 'light',
        inject: true,
        favicons: {
          appName: 'tvbronswijk.nl',
          appDescription: "Tobi van Bronswijk's resume",
          developerName: 'Tobi van Bronswijk',
          developerURL: null,
          background: '#fff',
          theme_color: '#fff',
          icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            windows: true,
            firefox: true,
            coast: false,
            yandex: false,
          },
        },
      }),
    ],
  },
}
