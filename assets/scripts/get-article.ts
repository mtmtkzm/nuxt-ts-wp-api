import axios from 'axios'
import dayjs from 'dayjs'
import { sanitizeHtml } from '~/assets/scripts/utilities/sanitize-html'

const API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts'

export const getLigBlogList = async function () {
  const response = await axios.get(API_PATH, {
    params: {
      author: '396',
      per_page: '100',
    },
  })

  const formatData = (list: any[]) => {
    return list.map((data) => ({
      id: data.id,
      title: sanitizeHtml(data.title.rendered),
      excerpt: sanitizeHtml(data.excerpt.rendered),
      date: dayjs(data.date).format('YYYY-MM-DD'),
      link: data.link,
    }))
  }

  return response.status === 200 ? formatData(response.data) : []
}

export const getLigBlogItem = async function (id: number) {
  const response = await axios.get(`${API_PATH}/${id}`)

  const formatData = (data: any) => {
    return {
      id,
      title: data.title.rendered,
      content: data.content.rendered,
      date: dayjs(data.date).format('YYYY-MM-DD'),
    }
  }

  return response.status === 200 ? formatData(response.data) : []
}
