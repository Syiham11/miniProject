const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: '/assets/vendors/core/core.css' },
      { rel: 'stylesheet', href: '/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css' },
      { rel: 'stylesheet', href: '/assets/fonts/feather-font/css/iconfont.css' },
      { rel: 'stylesheet', href: '/assets/vendors/flag-icon-css/css/flag-icon.min.css' },
      { rel: 'stylesheet', href: '/assets/css/demo_1/style.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "/assets/vendors/core/core.js" ,body: true},
      { src: "/assets/vendors/chartjs/Chart.min.js" ,body: true},
      { src: "/assets/vendors/jquery.flot/jquery.flot.js" ,body: true},
      { src: "/assets/vendors/jquery.flot/jquery.flot.resize.js" ,body: true},
      { src: "/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js" ,body: true},
      { src: "/assets/vendors/apexcharts/apexcharts.min.js" ,body: true},
      { src: "/assets/vendors/progressbar.js/progressbar.min.js" ,body: true},
      { src: "/assets/vendors/feather-icons/feather.min.js" ,body: true},
      { src: "/assets/js/template.js" ,body: true},
      { src: "/assets/js/dashboard.js" ,body: true},
      { src: "/assets/js/datepicker.js" ,body: true}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://127.0.0.1:8000/api/'

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      compact: true,
     },
    extend (config, ctx) {
    }
  }
}
