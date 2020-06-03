<template>
  <div>
    <header>
      <h1>Nuxt TypeScript + WordPress REST API</h1>

      <p>
        LIG LABの活動を通し、
        <mark>TypeScript</mark>
        の型を学び、賢くなります<br />
        クラス<b>なし</b>CSSフレームワークすっげえ
      </p>
    </header>

    <hr />

    <section>
      <aside v-for="item in list" :key="item.id">
        <NuxtLink :to="`/${item.id}`">
          <h2>{{ item.title }}</h2>
        </NuxtLink>

        <p>{{ item.date }}</p>

        <p>{{ item.excerpt }}</p>
      </aside>
    </section>
  </div>
</template>

<script lang="ts">
import { getLigBlogList } from '~/assets/scripts/get-article'

export default {
  async asyncData() {
    const list = await getLigBlogList()

    return { list }
  },
}
</script>
