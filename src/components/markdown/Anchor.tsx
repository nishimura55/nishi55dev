import { Components } from 'react-markdown'

export const Anchor: Components['a'] = ({ href, children }) => {
  const isValidURL =
    href !== undefined && (href.startsWith('http://') || href.startsWith('https://'))

  return isValidURL ? (
    <a
      href={href}
      target='blank'
      rel='noopener noreferrer'
      className='underline hover:no-underline mb-1'
    >
      {children}
    </a>
  ) : (
    <span className='mb-1'>{children}</span>
  )
}
