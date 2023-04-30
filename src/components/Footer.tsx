import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <div className='flex h-20 flex-col items-center justify-evenly bg-gray-300 text-sm text-gray-500'>
        <Link href='/disclaimer'>免責事項</Link>
        <div className='font-sans'>&copy; 2023 nishi</div>
      </div>
    </footer>
  )
}
