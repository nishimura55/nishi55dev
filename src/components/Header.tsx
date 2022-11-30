import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header>
      <div className='flex items-end justify-between py-2'>
        <Link className='text-4xl' href='/'>
          nishi
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
