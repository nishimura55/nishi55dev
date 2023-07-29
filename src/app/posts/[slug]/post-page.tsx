import * as fs from 'fs/promises'
import * as path from 'path'
import { PageTitle } from '~/src/components/common/PageTitle'
import { parseISO, format } from 'date-fns'
import { MarkdownRenderer } from '~/src/components/MarkdownRenderer'
import { markdownDataExtractor } from '~/src/utils/markdownDataExtractor'
import { notFound } from 'next/navigation'

const getPost = async (slug: string) => {
  const contentsDirPath = path.join(process.cwd(), 'contents')
  const filePath = path.join(contentsDirPath, slug)

  try {
    const md = await fs.readFile(filePath, 'utf-8')
    const { title, publishedAt, content } = markdownDataExtractor(md)

    return {
      title,
      publishedAt,
      content,
    }
  } catch {
    return notFound()
  }
}

export const PostPage = async ({ slug }: { slug: string }) => {
  const { title, publishedAt, content } = await getPost(slug)

  return (
    <div className='h-full bg-primary p-4 text-white'>
      <PageTitle title={title} size='sm' />
      <div className='mt-2 text-center text-sm'>{format(parseISO(publishedAt), 'yyyy.MM.dd')}</div>
      <div className='my-10'>
        <MarkdownRenderer md={content} />
      </div>
    </div>
  )
}
