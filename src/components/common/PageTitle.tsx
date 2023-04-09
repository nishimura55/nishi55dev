interface PageTitleProps {
  title: string
  tagName?: 'h1' | 'h2'
  size?: 'sm' | 'md'
  isVisible?: boolean
}

export const PageTitle = ({
  title,
  tagName: HeaderTag = 'h1',
  size = 'md',
  isVisible = true,
}: PageTitleProps) => {
  return (
    <HeaderTag
      className={`text-center ${size === 'md' ? 'text-3xl' : 'text-xl'} ${
        isVisible ? '' : 'hidden-but-accessible'
      }`}
    >
      {title}
    </HeaderTag>
  )
}
