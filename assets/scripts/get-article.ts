import axios from 'axios'
// import dayjs from 'dayjs'
// import { sanitizeHtml } from '~/assets/scripts/utilities/sanitize-html'

const API_URL = 'https://liginc.co.jp/wp-json/wp/v2'

export const getLigBlogList = async function () {
  const response = await axios.get(`${API_URL}/posts`, {
    params: {
      author: '396',
      per_page: '100',
    },
  })

  const formatData = (list: any[]) => {
    return list.map((data) => ({
      id: data.id,
      title: data.title.rendered,
      excerpt: data.excerpt.rendered,
      date: data.date,
      link: data.link,
    }))
  }

  return response.status === 200 ? formatData(response.data) : []
}

export const getLigBlogItem = async function (id: number) {
  const response = await axios.get(`${API_URL}/posts/${id}`)

  const formatData = (data: any) => {
    return {
      id,
      title: data.title.rendered,
      content: data.content.rendered,
      date: data.date,
    }
  }

  return response.status === 200 ? formatData(response.data) : []
}
