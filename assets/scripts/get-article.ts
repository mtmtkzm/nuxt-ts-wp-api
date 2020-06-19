import axios from 'axios'

interface Post {
  id: number
  title: {
    rendered: string
    raw?: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string
  link: string
}

const API_URL = 'https://liginc.co.jp/wp-json/wp/v2'

export const getLigBlogList = async function () {
  const response = await axios.get(`${API_URL}/posts`, {
    params: {
      author: '396',
      per_page: '100',
    },
  })

  const formatData = (list: Post[]) => {
    return list.map((data: Post) => ({
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

  const formatData = (data: Post) => {
    return {
      id,
      title: data.title.rendered,
      content: data.content.rendered,
      date: data.date,
    }
  }

  return response.status === 200 ? formatData(response.data) : []
}
