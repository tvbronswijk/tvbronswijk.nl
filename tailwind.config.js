module.exports = {
  theme: {
    extend: {
      backgroundImage: (_) => ({
        'hero-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%232c5282' fill-opacity='0.20' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
      })
    }
  },
  plugins: [],
  content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`],
}
