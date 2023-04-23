import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col items-center gap-2 bg-gray-300 py-4  text-sm text-gray-500'>
        <Link href='/disclaimer'>免責事項</Link>
        <div className='font-sans'>&copy; 2023 nishi</div>
      </div>
    </footer>
  )
}
