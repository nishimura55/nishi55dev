import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div className='flex h-16 items-center justify-between bg-primary px-4 text-white'>
        <Link className='text-3xl font-bold' href='/'>
          nishi
        </Link>
        <nav>
          <ul className='flex items-center gap-4'>
            <li>
              <a href='https://github.com/nishimura55' target='_blank' rel='noreferrer noopener'>
                GitHub
              </a>
            </li>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
