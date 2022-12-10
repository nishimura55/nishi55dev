import { FC } from 'react'

type PageTitleProps = {
  title: string
  tagName?: 'h1' | 'h2'
  size?: 'sm' | 'md'
}

export const PageTitle: FC<PageTitleProps> = ({
  title,
  tagName: HeaderTag = 'h1',
  size = 'md',
}) => {
  return (
    <HeaderTag className={`text-center ${size === 'md' ? 'text-3xl' : 'text-xl'}`}>
      {title}
    </HeaderTag>
  )
}
