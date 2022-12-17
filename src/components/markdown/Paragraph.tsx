import { Components } from 'react-markdown'

export const Paragraph: Components['p'] = ({ children }) => {
  return <p className='mb-1'>{children}</p>
}
