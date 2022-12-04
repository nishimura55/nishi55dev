import { FC } from 'react'

type PageTitleProps = {
  title: string
  tagName?: 'h1' | 'h2'
}

export const PageTitle: FC<PageTitleProps> = ({ title, tagName: HeaderTag = 'h1' }) => {
  return <HeaderTag className='mb-5 text-center text-3xl'>{title}</HeaderTag>
}
