import sanitize from 'sanitize-html'

export const sanitizeHtml = (htmlString: string) => {
  return sanitize(htmlString, {
    allowedTags: [],
    allowedAttributes: {},
  })
}
