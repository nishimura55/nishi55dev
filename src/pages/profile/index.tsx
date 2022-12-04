import { NextPage } from 'next'
import Image from 'next/image'
import { PageTitle } from '~/src/components/common/PageTitle'
import ProfileImage from '~/public/sample-image.png'

const Profile: NextPage = () => {
  return (
    <div className='h-full bg-blue-300 p-4 text-white'>
      <PageTitle title='Profile' />
      <div className='flex flex-col items-center gap-4'>
        <Image
          src={ProfileImage}
          alt='プロフィール画像'
          className='h-32 w-32 rounded-full sm:h-40 sm:w-40'
        />
        <p>Software Engineer</p>
      </div>
    </div>
  )
}

export default Profile
