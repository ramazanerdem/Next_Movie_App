import Image from 'next/image'
import Link from 'next/link'

const MoviesSection = ({ title, movies }) => {
  return (
    <div className="mb-10">
      <h3 className="mb-2 lg:text-xl font-semibold uppercase">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5">
        {movies.map((movie) => (
          <div
            className="h-80 xl:h-[460px] hover:scale-95 duration-200"
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <div className="relative mx-auto h-full rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  unoptimized
                  fill
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MoviesSection
