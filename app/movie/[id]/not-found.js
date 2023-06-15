import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-80 font-bold">
      <h1 className="text-3xl">We couldn&apos;t find such a movie.</h1>
      <Link className="underline text-lg" href="/">
        Go Home
      </Link>
    </div>
  )
}
export default NotFound
