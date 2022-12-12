import { HeadingComponent } from 'react-markdown/lib/ast-to-react'

export const Heading2: HeadingComponent = ({ children }) => {
  return <h2 className='mb-2 text-2xl font-bold'>{children}</h2>
}
