import { NextPage } from 'next'
import { PageTitle } from '~/src/components/common/PageTitle'

const Profile: NextPage = () => {
  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <PageTitle title='Profile' />
      <div>Software Engineer</div>
    </div>
  )
}

export default Profile
