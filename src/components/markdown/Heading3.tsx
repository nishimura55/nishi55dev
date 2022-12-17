import { Components } from 'react-markdown'

export const Heading3: Components['h3'] = ({ children }) => {
  return <h3 className='my-2 text-xl font-bold'>{children}</h3>
}
