import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Heading2 } from '~/src/components/markdown/Heading2'
import { Heading3 } from '~/src/components/markdown/Heading3'
import { Paragraph } from '~/src/components/markdown/Paragraph'
import { UnorderedList } from '~/src/components/markdown/UnorderedList'

type MarkdownRendererProps = {
  md: string
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ md }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ h2: Heading2, h3: Heading3, p: Paragraph, ul: UnorderedList }}
    >
      {md}
    </ReactMarkdown>
  )
}
