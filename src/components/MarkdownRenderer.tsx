import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Heading2 } from '~/src/components/markdown/Heading2'

type MarkdownRendererProps = {
  md: string
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ md }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h2: Heading2 }}>
      {md}
    </ReactMarkdown>
  )
}
