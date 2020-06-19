import { Configuration } from '@nuxt/types'
import { getLigBlogItem, getLigBlogList } from './assets/scripts/get-article'

require('dotenv').config()

const nuxtConfig: Configuration = {
  mode: 'universal',

  env: {
    WP_API_URL: process.env.WP_API_URL || '',
  },

  head: {
    title: 'title',
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

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/svg-sprite'],

  components: true,

  svgSprite: {
    input: '~/assets/svg/sprite-parts',
    output: '~/assets/svg/sprites',
    defaultSprite: 'sprite',
  },

  generate: {
    async routes() {
      const ids = (await getLigBlogList()).map((item) => item.id)

      const posts = await Promise.all(ids.map(await getLigBlogItem))

      return posts.map((post: any) => ({
        route: String(post.id),
        payload: post,
      }))
    },
  },
}

module.exports = nuxtConfig
