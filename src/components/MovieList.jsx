import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <>
      <h2 className="text-white">Trending Now</h2>
      <div className="flex overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            backdropPath={movie.backdrop_path}
            title={movie.title}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
