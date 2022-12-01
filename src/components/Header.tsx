import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header>
      <div className='flex items-end justify-between bg-blue-800 p-4 text-white'>
        <Link className='text-3xl' href='/'>
          nishi
        </Link>
        <nav>
          <ul className='text-lg'>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
