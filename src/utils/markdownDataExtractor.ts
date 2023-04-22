import matter from 'gray-matter'

export const markdownDataExtractor = (md: string) => {
  const { data, content } = matter(md)
  const title = typeof data.title === 'string' ? data.title : '題名なし'
  const publishedAt = typeof data.publishedAt === 'string' ? data.publishedAt : '公開日不明'

  return {
    content,
    title,
    publishedAt,
  }
}
