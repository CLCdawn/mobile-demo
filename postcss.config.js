module.exports = {
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      selectorBlackList: ['van', 'ignore']
    }),
    require('autoprefixer'),
    require('postcss-write-svg')
  ]
}
