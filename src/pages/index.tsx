import { GetStaticProps, NextPage } from 'next'
import { PageTitle } from '../components/common/PageTitle'
import * as fs from 'fs/promises'
import * as path from 'path'
import Link from 'next/link'
import { format, isAfter, parseISO } from 'date-fns'
import { markdownDataExtractor } from '~/src/utils/markdownDataExtractor'

interface PostHeadline {
  title: string
  publishedAt: string
  slug: string
}

interface HomeProps {
  posts: PostHeadline[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className='h-full bg-blue-600 p-4 text-white'>
      <PageTitle title='nishiのブログページ' isVisible={false} />
      <div className='mt-3 sm:px-8'>
        {posts.map((post) => (
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const contentsDirPath = path.join(process.cwd(), 'contents')
  const slugs = await fs.readdir(contentsDirPath)
  const groupedPosts = await Promise.all(
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
  const posts = [...groupedPosts].sort((a, b) =>
    isAfter(new Date(a.publishedAt), new Date(b.publishedAt)) ? -1 : 1,
  )

  return {
    props: { posts },
  }
}

export default Home
