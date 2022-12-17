import { FC } from 'react'

type PageTitleProps = {
  title: string
  tagName?: 'h1' | 'h2'
  size?: 'sm' | 'md'
  isVisible?: boolean
}

export const PageTitle: FC<PageTitleProps> = ({
  title,
  tagName: HeaderTag = 'h1',
  size = 'md',
  isVisible = true,
}) => {
  return (
    <HeaderTag
      className={`text-center ${size === 'md' ? 'text-3xl' : 'text-xl'} ${
        isVisible ? '' : 'absolute h-0 w-0 opacity-0'
      }`}
    >
      {title}
    </HeaderTag>
  )
}
