import { FC, ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

type AppLayoutProps = {
  children: ReactNode
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className='mx-auto flex h-screen max-w-pageContent flex-col content-between bg-gray-100'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}
