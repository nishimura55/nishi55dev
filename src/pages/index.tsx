import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main>
      <h1>
        Welcome to <span className='text-red-500'>nishi</span> page!
      </h1>
      <div className='font-bold'>Hello</div>
      <Link href='/profile'>Profile</Link>
    </main>
  )
}

export default Home
