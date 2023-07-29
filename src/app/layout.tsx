import '~/src/styles/globals.css'
import { ReactNode } from 'react'
import { Header } from '~/src/components/Header'
import { Footer } from '~/src/components/Footer'
import { Metadata } from 'next'

// TODO: favicon
export const metadata: Metadata = {
  title: 'nishi page',
  description: 'nishi page',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className='mx-auto flex h-screen max-w-pageContent flex-col content-between'>
          <Header />
          <div className='flex-1'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
