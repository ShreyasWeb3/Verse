import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  if (!nowPlayingMovies) return;
  if (!popularMovies) return;
  if (!topRatedMovies) return;
  if (!upcomingMovies) return;

  return (
    <>
      <div className="h-screen bg-[rgba(0,0,0,.85)]">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
        <MovieList title="Hollywood Movies" movies={popularMovies} />
      </div>
    </>
  );
};

export default SecondaryContainer;
