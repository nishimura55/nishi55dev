import { Components } from 'react-markdown'

export const Blockquote: Components['blockquote'] = ({ children }) => {
  return (
    <blockquote className='my-4 whitespace-pre-wrap rounded bg-gray-50 px-4 font-sans text-gray-400'>
      {children}
    </blockquote>
  )
}
