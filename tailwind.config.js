module.exports = {
  mode: 'jit', // Enable JIT mode for faster builds and smaller CSS
  theme: {
    extend: {
      backgroundImage: (_) => ({
        'hero-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%232c5282' fill-opacity='0.20' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
      }),
      // Add custom utilities for better optimization
      height: {
        '90vp': '90vh',
      },
      borderRadius: {
        '10': '2.5rem',
      }
    }
  },
  plugins: [],
  // Optimized content paths for better purging
  content: [
    `components/**/*.{vue,js,ts}`, 
    `layouts/**/*.{vue,js,ts}`, 
    `pages/**/*.{vue,js,ts}`,
    `plugins/**/*.{js,ts}`,
    `content/**/*.md`,
    `nuxt.config.{js,ts}`
  ],
  // Enable CSS optimization
  corePlugins: {
    // Disable unused core plugins to reduce bundle size
    container: false,
    float: false,
    clear: false,
    skew: false,
    caretColor: false,
    sepia: false,
  },
  // Safelist for dynamic classes
  safelist: [
    'hidden',
    'md:inline',
    'lg:w-96',
    'xl:h-90vp',
    'xl:rounded-10',
    'bg-gray-100',
    'animate-pulse',
    'mx-auto',
    'h-8',
    'w-8',
    'fill-current',
    'text-blue-900'
  ]
}
