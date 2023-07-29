import { PageTitle } from '../components/common/PageTitle'
import * as fs from 'fs/promises'
import * as path from 'path'
import Link from 'next/link'
import { format, isAfter, parseISO } from 'date-fns'
import { markdownDataExtractor } from '~/src/utils/markdownDataExtractor'

const getSortedPosts = async () => {
  const contentsDirPath = path.join(process.cwd(), 'contents')
  const slugs = await fs.readdir(contentsDirPath)
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(contentsDirPath, slug)
      const md = await fs.readFile(filePath, 'utf-8')
      const { title, publishedAt } = markdownDataExtractor(md)

      return {
        title,
        publishedAt,
        slug,
      }
    }),
  )
  const sortedPosts = [...posts].sort((a, b) =>
    isAfter(new Date(a.publishedAt), new Date(b.publishedAt)) ? -1 : 1,
  )

  return sortedPosts
}

export const HomePage = async () => {
  const sortedPosts = await getSortedPosts()

  return (
    <div className='h-full bg-primary p-4 text-white'>
      <PageTitle title='nishiのブログページ' isVisible={false} />
      <div className='mt-3 sm:px-8'>
        {sortedPosts.map((post) => (
          <article key={post.slug} className='mt-4'>
            <h2 className='text-lg'>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className='text-sm'>{format(parseISO(post.publishedAt), 'yyyy.MM.dd')}</div>
          </article>
        ))}
      </div>
    </div>
  )
}
