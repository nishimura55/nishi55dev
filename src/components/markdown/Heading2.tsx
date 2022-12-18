import { Components } from 'react-markdown'

export const Heading2: Components['h2'] = ({ children }) => {
  return <h2 className='my-3 border-b border-b-white text-2xl font-bold'>{children}</h2>
}
