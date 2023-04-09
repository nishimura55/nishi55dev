import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='mx-auto flex h-screen max-w-pageContent flex-col content-between'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}
