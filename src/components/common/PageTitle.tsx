import { FC } from 'react'

type PageTitleProps = {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <h1 className='mb-5 text-center text-3xl'>{title}</h1>
}
