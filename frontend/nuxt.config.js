module.exports = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: 'Medford',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Medford' },
    ],
    script: [
      { src: 'https://player.vimeo.com/api/player.js' },
    ]
  },
  css: [
    'bootstrap/scss/bootstrap.scss',
    './assets/styles/main.scss',
  ],
  modules: [
    'vue-scrollto/nuxt',
  ],
  plugins: [
    { src: './plugins/owl-carousel', ssr: false },
    { src: './plugins/vue-tel-input', ssr: false },
  ],
  build: {
    // publicPath: '/_nuxt/',
    cssSourceMap: false,
    extractCSS: false,
    transpile: [
      'vue-owl-carousel',
      'v-easy-dialog',
      'moment'
    ],
    vendor: [
        'vue-owl-carousel',
        'v-easy-dialog',
        'vue-tel-input'
    ]
  }
};