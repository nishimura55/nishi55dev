import { Components } from 'react-markdown'

export const UnorderedList: Components['ul'] = ({ children }) => {
  return <ul className='mb-1 list-disc pl-4'>{children}</ul>
}
