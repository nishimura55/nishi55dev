import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <h1 className='mb-5 text-lg'>
        This is <span className='font-bold'>nishi</span> page!
      </h1>
      <div className='font-bold'>Blog post</div>
      {/* TODO: ブログ一覧を表示 */}
      <div className='mt-4'>coming soon...</div>
    </div>
  )
}

export default Home
