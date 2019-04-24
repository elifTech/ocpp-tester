const path = require('path');
const env = process.env.NUXT_ENV_CONFIG || 'dev';

module.exports = {
  mode: 'universal',

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
    ],
    script: [
    ]
  },

  router: {
    middleware: [
        'context',
    ]
  },

  css: [
    '~/assets/main.scss'
  ],

  loading: false,

  plugins: [
    { src: '~/plugins/vue-mq.js', mode: 'all' },
    { src: '~/plugins/sockets.js', mode: 'client' },
    { src: '~/plugins/persistedstate.js', mode: 'client' }
  ],

  env: {},

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],

  axios: { proxy: true },
  proxy: [
    ['/api', { target: 'http://localhost:5000', followRedirects: false, secure: false }]
  ],
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxt/babel-preset-app",
            {
              useBuiltIns: "entry",
              targets: isServer ? { node: '10' } : { ie: '11' },
              corejs: { version: 3 }
            }
          ]
        ]
      },
      plugins: [
        ['@babel/proposal-decorators', { legacy: true }],
        ['@babel/proposal-class-properties', { loose: true }]
      ]
    },
    extend(config, ctx) {
    }
  },
  vuetify: {
    //  theme: { }
  }
};
