import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as fs from 'fs/promises'
import * as path from 'path'
import { PageTitle } from '~/src/components/common/PageTitle'
import { parseISO, format } from 'date-fns'
import { MarkdownRenderer } from '~/src/components/MarkdownRenderer'
import { markdownDataExtractor } from '~/src/utils/markdownDataExtractor'

interface PostProps {
  title: string
  publishedAt: string
  content: string
}

const Post: NextPage<PostProps> = ({ title, publishedAt, content }) => {
  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <PageTitle title={title} size='sm' />
      <div className='mt-2 text-center text-sm text-gray-500'>
        {format(parseISO(publishedAt), 'yyyy.MM.dd')}
      </div>
      <div className='mt-4'>
        <MarkdownRenderer md={content} />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const contentsDirPath = path.join(process.cwd(), 'contents')
  const slugs = await fs.readdir(contentsDirPath)

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps, { slug: string }> = async (context) => {
  const slug = context.params?.slug
  if (!slug) {
    throw new Error('No slug post!')
  }

  const contentsDirPath = path.join(process.cwd(), 'contents')
  const filePath = path.join(contentsDirPath, slug)
  const md = await fs.readFile(filePath, 'utf-8')
  const { title, publishedAt, content } = markdownDataExtractor(md)

  return {
    props: {
      title,
      publishedAt,
      content,
    },
  }
}

export default Post
