module.exports = {
  plugins: {
    tailwindcss: {
      /* purge all unused tailwind styles to minimize the overhead of this app */
      purge: [
        './public/**/*.html',
        './src/**/*.vue',
      ]
    },
    autoprefixer: {},
  },
}
