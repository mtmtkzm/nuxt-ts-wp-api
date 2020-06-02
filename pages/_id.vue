<template>
  <div class="pages-_id">
    <h1>{{ item.title }}</h1>
    <p>
      <time>
        {{ item.date }}
      </time>
    </p>

    <hr />

    <div v-html="item.content"></div>
  </div>
</template>

<script>
import { getLigBlogItem } from '~/assets/scripts/get-article'

export default {
  async asyncData({ route }) {
    const id = route.params.id
    const item = await getLigBlogItem(id)

    return { item }
  },
}
</script>

<style scoped lang="scss">
.pages-_id {
}
</style>
