import { NextPage } from 'next'
import { PageTitle } from '../components/common/PageTitle'

const Home: NextPage = () => {
  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <PageTitle title='Blog post' />
      {/* TODO: ブログ一覧を表示 */}
      <div className='mt-4'>coming soon...</div>
    </div>
  )
}

export default Home
