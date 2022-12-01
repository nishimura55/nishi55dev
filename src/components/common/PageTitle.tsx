import { FC, ReactNode } from 'react'

type PageTitleProps = {
  children: ReactNode
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h1 className='mb-5 text-3xl'>{children}</h1>
}
