import { FC, ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

type Props = {
  children: ReactNode
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto max-w-pageContent'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
