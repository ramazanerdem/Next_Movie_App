import Image from 'next/image'
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie
  // console.log(movie)
  return (
    <div className="w-4/5 xl:w-2/3 mt-8 xl:mt-16">
      <h1 className="text-4xl xl:text-7xl font-bold">{title}</h1>
      <p
        className={`text-md xl:text-2xl my-5 xl:my-10 line-clamp-2 lg:line-clamp-none`}
      >
        {overview}
      </p>
      <div className="flex items-center gap-3">
        <Link
          className="bg-white text-black lg:text-xl font-semibold py-2 px-16 xl:py-3 xl:px-24 rounded-full"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="text-5xl text-white">
          <AiOutlinePlusCircle />
        </button>
      </div>
      <div className="static">
        <div className="-z-10 absolute inset-0 bg-gradient-to-t via-black xl:via-25% from-black"></div>
        <Image
          className="-z-20 -translate-y-36 xl:-translate-y-52 absolute object-top object-cover"
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          priority
          fill
        />
      </div>
    </div>
  )
}
export default FeaturedMovie
