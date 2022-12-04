import { NextPage } from 'next'
import { PageTitle } from '../components/common/PageTitle'

const Home: NextPage = () => {
  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <h1 className='absolute h-0 w-0 opacity-0'>nishiのブログページ</h1>
      <PageTitle title='Blog post' tagName='h2' />
      {/* TODO: ブログ一覧を表示 */}
      <div className='mt-4'>coming soon...</div>
    </div>
  )
}

export default Home
