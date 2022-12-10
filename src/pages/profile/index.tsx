import { NextPage } from 'next'
import Image from 'next/image'
import { PageTitle } from '~/src/components/common/PageTitle'
import ProfileImage from '~/public/sample-image.png'
import { SocialIcon } from 'react-social-icons'
import { links, skillNames } from '~/src/constants/profile'

const Profile: NextPage = () => {
  return (
    <div className='h-full bg-blue-300 p-4 pb-8 text-white'>
      <PageTitle title='Profile' />
      <div className='mt-3 flex flex-col items-center gap-7 text-center'>
        <Image
          src={ProfileImage}
          alt='プロフィール画像'
          className='h-32 w-32 rounded-full sm:h-40 sm:w-40'
        />
        <div>
          <h2 className='mb-2'>Name</h2>
          <p className='text-sm'>nishi</p>
        </div>
        <div>
          <h2 className='mb-2'>Job</h2>
          <p className='text-sm'>Software Engineer</p>
        </div>
        <div>
          <h2 className='mb-2'>Skills</h2>
          <ul className='flex flex-wrap justify-center gap-3 text-sm'>
            {skillNames.map((skillName, index) => (
              <li key={index}>{skillName}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='mb-2'>Links</h2>
          <ul className='flex flex-wrap justify-center gap-3 text-sm'>
            {links.map((link) => (
              <li key={link.url}>
                <SocialIcon target='_blank' url={link.url} style={{ height: 32, width: 32 }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
