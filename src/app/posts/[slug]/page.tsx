import * as fs from 'fs/promises'
import * as path from 'path'
import { PostPage } from '~/src/app/posts/[slug]/post-page'

export const generateStaticParams = async () => {
  const contentsDirPath = path.join(process.cwd(), 'contents')
  const slugs = await fs.readdir(contentsDirPath)

  return slugs.map((slug) => ({ slug }))
}

const Page = ({ params }: { params: { slug: string } }) => {
  return <PostPage slug={params.slug} />
}

export default Page
