import Categories from '@/components/categories'
import FeaturedMovie from '@/components/featured-movie'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div className="">
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 7)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Top Rated" movies={topRatedMovies.slice(0, 7)} />
      <MoviesSection
        title="Popular Films"
        movies={popularMovies.slice(10, 20)}
      />
    </div>
  )
}
export default HomeContainer
