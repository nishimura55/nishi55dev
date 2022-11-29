import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>nishi page</title>
        <meta name='description' content='nishi page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>
          Welcome to <span className='text-red-500'>nishi</span> page!
        </h1>
        <div className='font-bold'>Hello</div>
        <Link href='/profile'>Profile</Link>
      </main>
      <footer>
        <div>2022</div>
      </footer>
    </div>
  )
}

export default Home
