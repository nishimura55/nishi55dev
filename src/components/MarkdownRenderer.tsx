import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Blockquote } from '~/src/components/markdown/Blockquote'
import { CodeSyntaxHighlighter } from '~/src/components/markdown/CodeSyntaxHighlighter'
import { Heading2 } from '~/src/components/markdown/Heading2'
import { Heading3 } from '~/src/components/markdown/Heading3'
import { HorizontalRule } from '~/src/components/markdown/HorizontalRule'
import { Paragraph } from '~/src/components/markdown/Paragraph'
import { UnorderedList } from '~/src/components/markdown/UnorderedList'

type MarkdownRendererProps = {
  md: string
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ md }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: Heading2,
        h3: Heading3,
        p: Paragraph,
        ul: UnorderedList,
        hr: HorizontalRule,
        blockquote: Blockquote,
        code: CodeSyntaxHighlighter,
      }}
    >
      {md}
    </ReactMarkdown>
  )
}
