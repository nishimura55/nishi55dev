import Head from 'next/head'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>nishi page</title>
        <meta name='description' content='nishi page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Link className='text-xl' href='/'>
          nishi
        </Link>
      </header>
      {children}
      <footer>
        <div>2022</div>
      </footer>
    </div>
  )
}
