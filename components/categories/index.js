import Link from 'next/link'

const Categories = ({ categories }) => {
  return (
    <div className="my-10 flex justify-start overflow-y-auto gap-5">
      {categories.map((category) => (
        <Link key={category.id} href={`/${category.id}`}>
          <div className="text-black bg-white hover:bg-opacity-80 px-3 py-1 md:px-5 md:py-2 rounded-md font-semibold text-xs md:text-xl w-20 md:w-44 text-center">
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Categories
