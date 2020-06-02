import { Configuration } from '@nuxt/types'
require('dotenv').config()

const nuxtConfig: Configuration = {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/mvp.css',
      },
    ],
  },

  css: ['~/assets/styles/style.scss'],

  plugins: [],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/components', // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/svg-sprite'],

  // styleResources: {
  //   scss: ['~/assets/styles/_vue-globals.scss'],
  // },

  svgSprite: {
    input: '~/assets/svg/sprite-parts',
    output: '~/assets/svg/sprites',
    defaultSprite: 'sprite',
  },

  axios: {},

  build: {},
}

module.exports = nuxtConfig
