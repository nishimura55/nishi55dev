import { Components } from 'react-markdown'

export const Heading2: Components['h2'] = ({ children }) => {
  return <h2 className='my-3 text-2xl font-bold'>{children}</h2>
}
