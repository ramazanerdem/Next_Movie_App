import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'

import { getMovie } from '@/services/movie'

const MoviePage = async ({ params }) => {
  const movieDetail = await getMovie(params.id)

  if (!movieDetail) {
    notFound()
  }

  return <MovieContainer movie={movieDetail} />
}
export default MoviePage
