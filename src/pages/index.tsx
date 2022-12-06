import { NextPage } from 'next'
import { PageTitle } from '../components/common/PageTitle'
import * as fs from 'fs/promises'
import * as path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

type HomeProps = {
  posts: {
    title: string
    date: string
    slug: string
  }[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  console.log({ posts })

  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <h1 className='absolute h-0 w-0 opacity-0'>nishiのブログページ</h1>
      <PageTitle title='Blog post' tagName='h2' />
      <div className='px-8'>
        {posts.map((post) => (
          <article key={post.slug} className='mt-4'>
            <h2>
              <Link href=''>{post.title}</Link>
            </h2>
            <div className='text-sm'>{post.date}</div>
          </article>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const contentsDirPath = path.join(process.cwd(), 'contents')
  const postDates = await fs.readdir(contentsDirPath)
  const groupedPosts = await Promise.all(
    postDates.map(async (date) => {
      const postFilesPath = path.join(contentsDirPath, date)
      const postFileNames = await fs.readdir(postFilesPath)
      return await Promise.all(
        postFileNames.map(async (fileName) => {
          const filePath = path.join(postFilesPath, fileName)
          const content = await fs.readFile(filePath, 'utf-8')
          const data = matter(content).data
          const title = typeof data.title === 'string' ? data.title : `${date}投稿のブログ`

          return {
            title,
            date,
            slug: fileName,
          }
        }),
      )
    }),
  )
  const posts = groupedPosts.flat()

  return {
    props: { posts },
  }
}

export default Home
