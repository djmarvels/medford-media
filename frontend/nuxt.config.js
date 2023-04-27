module.exports = {
  target: 'static',
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      { src: 'https://player.vimeo.com/api/player.js' },
    ]
  },
  css: [
    'bootstrap/scss/bootstrap.scss',
    './assets/styles/main.scss',
  ],
  plugins: [
    { src: './plugins/owl-carousel', ssr: false },
  ],
  build: {
    publicPath: '/_nuxt/',
    cssSourceMap: false,
    extractCSS: false,
    transpile: [
      'vue-owl-carousel'
    ],
    vendor: [
        'vue-owl-carousel'
    ]
  }
};