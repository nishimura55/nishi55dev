import { GetStaticProps, NextPage } from 'next'
import { PageTitle } from '../components/common/PageTitle'
import * as fs from 'fs/promises'
import * as path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

type PostHeadline = {
  title: string
  publishedAt: string
  slug: string
}

type HomeProps = {
  posts: PostHeadline[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  console.log({ posts })

  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <h1 className='absolute h-0 w-0 opacity-0'>nishiのブログページ</h1>
      <PageTitle title='Blog post' tagName='h2' />
      <div className='px-4 sm:px-8'>
        {posts.map((post) => (
          <article key={post.slug} className='mt-4'>
            <h2>
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
      const content = await fs.readFile(filePath, 'utf-8')
      const data = matter(content).data
      const title = typeof data.title === 'string' ? data.title : '題名なし'
      const publishedAt = typeof data.publishedAt === 'string' ? data.publishedAt : '公開日不明'

      return {
        title,
        publishedAt,
        slug,
      }
    }),
  )
  const posts = groupedPosts.flat()

  // TODO: 日付のソート処理

  return {
    props: { posts },
  }
}

export default Home
