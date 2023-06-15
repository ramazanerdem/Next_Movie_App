import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mx-auto">
      Created by{' '}
      <Link
        className="hover:text-red-500"
        href="https://github.com/ramazanerdem/"
        target="_blank"
      >
        Ramazan Erdem
      </Link>
    </footer>
  )
}
export default Footer
