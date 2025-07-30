export default defineNuxtConfig({
  // Modern Nuxt 3 configuration
  devtools: { enabled: true },
  
  // Target and SSR settings
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // Global page headers
  app: {
    head: {
      title: 'tvbronswijk.nl',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        // Performance and security optimizations
        { 'http-equiv': 'X-DNS-Prefetch-Control', content: 'on' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' }
      ],
      // Add resource hints for better performance
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://github.com' },
        { rel: 'dns-prefetch', href: 'https://www.linkedin.com' },
        { rel: 'dns-prefetch', href: 'https://twitter.com' },
        // Preload critical images
        { rel: 'preload', href: '/images/profile-small-fit.webp', as: 'image', type: 'image/webp' },
        { rel: 'preload', href: '/images/profile-optimized.jpg', as: 'image', type: 'image/jpeg' }
      ]
    }
  },

  // Global CSS
  css: [],

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image'
  ],

  // Content module configuration
  content: {
    // Enable content optimization
    markdown: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  },

  // Image module configuration
  image: {
    // Quality settings
    quality: 80,
    // Enable WebP format
    format: ['webp', 'jpg', 'png'],
    // Add responsive image sizes
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false
  },

  // Build configuration
  vite: {
    build: {
      // Enable build optimizations
      target: 'esnext',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', '@vue/runtime-core']
    }
  },

  // Runtime configuration
  runtimeConfig: {
    // Private keys (only available on server-side)
    // apiSecret: '123',
    
    // Public keys (exposed to client-side)
    public: {
      // apiBase: '/api'
    }
  },

  // Enable modern ESM builds
  experimental: {
    payloadExtraction: false
  },

  // Compatibility
  compatibilityDate: '2025-01-30'
})