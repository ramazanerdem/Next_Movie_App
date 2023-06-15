'use client'

import Link from 'next/link'

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-80 font-bold">
      <h1 className="text-3xl">
        You have encountered an error. Sorry for that.
      </h1>
      <Link className="underline text-lg" href="/">
        Go Home
      </Link>
    </div>
  )
}
export default Error
