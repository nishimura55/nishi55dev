import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <div className='flex h-24 flex-col items-center justify-evenly border-t border-[#146C94] bg-primary text-sm text-white'>
        <Link href='/disclaimer'>免責事項</Link>
        <div className='font-sans'>&copy; 2023 nishi</div>
      </div>
    </footer>
  )
}
