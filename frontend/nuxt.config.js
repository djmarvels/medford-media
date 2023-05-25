module.exports = {
  target: 'static',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
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
      'vue-owl-carousel',
      'v-easy-dialog',
      'moment'
    ],
    vendor: [
        'vue-owl-carousel',
        'v-easy-dialog'
    ]
  }
};