import Link from 'next/link'
import { RiMovie2Fill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className="py-8">
      <div className="px-10 relative flex justify-between items-center">
        <Link
          className="flex items-center gap-2 font-bold text-yellow-600 text-2xl xl:text-4xl"
          href="&#47;"
        >
          <RiMovie2Fill /> ZORTFLIX
        </Link>
        <nav className="hidden md:flex items-center md:text-xl gap-10 font-semibold">
          <Link href="&#47;">Movies</Link>
          <Link href="&#47;">Series</Link>
          <Link href="&#47;">Kids</Link>
        </nav>
      </div>
    </header>
  )
}
export default Header
