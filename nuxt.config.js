var node_env = process.argv[4];

/**
 * dir: 打包目录
 * baseurl：服务端地址
 */
const outputDirObj = {
  'debug': {dir: 'PublishTarget/Debug', baseurl: 'http://xxx.debug.com'},
  'production': {dir: 'PublishTarget/Release', baseurl: 'http://xxx.production.com'},
  'test01': {dir: 'PublishTarget/PublishTest01', baseurl: 'http://xxx.test01.com'},
  'test02': {dir: 'PublishTarget/PublishTest02', baseurl: 'http://xxx.test02.com'},
  'dev': {dir: '/', baseurl: 'http://xxx.dev.com'}
}

process.env.BASE_URL = outputDirObj[node_env] && outputDirObj[node_env].baseurl || outputDirObj.dev.baseurl;
var dir = outputDirObj[node_env] && outputDirObj[node_env].dir || 'dist';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '泛嘉医疗国际版',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/default.css'},
      // {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.bootcdn.net/ajax/libs/Swiper/5.4.5/css/swiper.min.css'}
    ],
    script: [
      {type: 'text/javascript', src: 'https://webapi.amap.com/maps?v=1.4.15&key=8be26d46adfaecad9c516dcfa12fe57f'},
    ]
  },
  srcDir: 'src/',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'swiper/dist/css/swiper.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/layers.ts', mode: 'client' },
    '~/plugins/route.ts'
  ],
  router: {
    middleware: ["device"],
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  telemetry: false,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/router',
  ],
  env: {
    baseUrl: process.env.BASE_URL
  },
  generate: {
    dir: dir,
    routes: [
      '/'
    ]
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
