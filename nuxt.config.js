export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Enable modern mode for better performance with ES6+ browsers
  modern: 'client',

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
      // Performance and security optimizations
      { 'http-equiv': 'X-DNS-Prefetch-Control', content: 'on' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
    ],
    // Add resource hints for better performance
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://github.com' },
      { rel: 'dns-prefetch', href: 'https://www.linkedin.com' },
      { rel: 'dns-prefetch', href: 'https://twitter.com' },
      // Preload critical images
      { rel: 'preload', href: '/images/profile-small.webp', as: 'image', type: 'image/webp' },
      { rel: 'preload', href: '/images/profile-optimized.jpg', as: 'image', type: 'image/jpeg' },
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
    'nuxt-rfg-icon',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    // Enable content optimization
    markdown: {
      prism: {
        theme: false // Disable Prism.js to reduce bundle size
      }
    }
  },

  // Image module configuration: https://image.nuxtjs.org/getting-started/installation#configuration
  image: {
    // Options
  },

  'rfg-icon': {
    masterPicture: './icon.svg',
    static: false,
  },

  // Tailwind CSS configuration
  tailwindcss: {
    // Enable CSS purging in production
    purgeCSS: {
      mode: 'postcss',
      enabled: process.env.NODE_ENV === 'production',
      // Safelist important classes that might be dynamically generated
      safelist: ['hidden', 'md:inline', 'lg:w-96', 'xl:h-90vp', 'xl:rounded-10'],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Enable build optimizations
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {
          vendor: {
            name: 'node_vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 200000,
          }
        }
      }
    },
    
    // Enable gzip compression
    compress: true,
    
    // Minimize CSS
    extractCSS: {
      ignoreOrder: true
    },
    
    // Optimize bundle analyzer (development only)
    analyze: process.env.ANALYZE === 'true',
    
    // Optimize webpack configuration
    extend(config, { isDev, isClient }) {
      // Enable tree shaking
      if (!isDev) {
        config.optimization.usedExports = true
        config.optimization.sideEffects = false
      }
    }
  },

  // Enable PWA features for better caching
  generate: {
    // Improve generation performance
    concurrency: 25,
    interval: 2000,
    // Enable better caching with fallback
    fallback: true,
  }
}
