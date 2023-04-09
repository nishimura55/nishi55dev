import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div className='flex items-end justify-between bg-blue-800 p-4 text-white'>
        <Link className='text-3xl font-bold' href='/'>
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
