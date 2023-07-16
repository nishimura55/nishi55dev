import { NextPage } from 'next'
import Image from 'next/image'
import { PageTitle } from '~/src/components/common/PageTitle'
import ProfileIconImage from '~/public/ProfileIcon.png'
import { SocialIcon } from 'react-social-icons'
import { links, skillNames } from '~/src/constants/profile'

const Profile: NextPage = () => {
  return (
    <div className='h-full bg-primary p-4 pb-8 text-white'>
      <PageTitle title='nishiのプロフィール' isVisible={false} />
      <div className='mt-3 flex flex-col gap-7 sm:px-8'>
        <div className='flex justify-center'>
          <Image
            src={ProfileIconImage}
            alt='プロフィール画像'
            className='h-32 w-32 rounded-full sm:h-40 sm:w-40'
          />
        </div>
        <div>
          <h2 className='mb-2 text-lg'>Name</h2>
          <p className='text-sm'>nishi</p>
        </div>
        <div>
          <h2 className='mb-2 text-lg'>Job</h2>
          <p className='text-sm'>Software Engineer</p>
        </div>
        <div>
          <h2 className='mb-2 text-lg'>Skills</h2>
          <ul className='flex flex-wrap gap-2 text-sm'>
            {skillNames.map((skillName, index) => (
              <li key={index}>{skillName}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='mb-2 text-lg'>Links</h2>
          <ul className='flex flex-wrap gap-3 text-sm'>
            {links.map((link) => (
              <li key={link.url}>
                <SocialIcon
                  target='_blank'
                  url={link.url}
                  style={{ height: 32, width: 32 }}
                  fgColor='white'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
