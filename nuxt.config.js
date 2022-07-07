export default {
  head: {

  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eneru Technology',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo2.ico' },
      { rel: 'icon', href: '/img/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700' }
    ]
  },

  css: [
    '~/static/lib/bootstrap/css/bootstrap.min.css',
    '~/static/lib/font-awesome/css/font-awesome.min.css',
    '~/static/lib/animate/animate.min.css',
    '~/static/lib/owlcarousel/assets/owl.carousel.min.css',
    '~/static/lib/ionicons/css/ionicons.min.css',
    '~/static/lib/lightbox/css/lightbox.min.css',
    '~/static/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/middleware/bootstrap.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  router: {

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    done (builder) {
      // Copy dist files to public/_nuxt
      if (builder.nuxt.options.dev === false && builder.nuxt.options.mode === 'spa') {
        const publicDir = join(builder.nuxt.options.rootDir, 'public', '_nuxt')
        removeSync(publicDir)
        copySync(join(builder.nuxt.options.generate.dir, '_nuxt'), publicDir)
        copySync(join(builder.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'https://fierce-tundra-33683.herokuapp.com', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: false
        }
      }
    }
  },
  server: {
    // host: "192.168.43.35"
  },
  ignore: [
    '.nuxt', // buildDir
    'static', // dir.static
    'dist', // generate.dir
    'node_modules',
    '.**/*',
    '.*',
    'README.md'
  ]
}
