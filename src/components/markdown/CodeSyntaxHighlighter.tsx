import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const CodeSyntaxHighlighter = ({
  inline,
  className,
  children,
  // SEE: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/479#issuecomment-1267772279
  style: _style,
  ...props
}: CodeProps) => {
  const match = /language-(\w+)/.exec(className || '')

  return !inline && match ? (
    <div className='my-4'>
      <SyntaxHighlighter
        style={vscDarkPlus}
        customStyle={{ borderRadius: '0.25rem' }}
        language={match[1]}
        PreTag='div'
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  ) : (
    <div className='my-4 rounded bg-black p-4'>
      <code className={className} {...props}>
        {children}
      </code>
    </div>
  )
}
