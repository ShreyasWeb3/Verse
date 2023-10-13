import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const airingTodayShows = useSelector((store) => store.shows?.airingTodayShows)
  const onTheAirShows = useSelector((store) => store.shows?.onTheAirShows)
  const popularShows = useSelector((store) => store.shows?.popularShows)
  const topRatedShows = useSelector((store) => store.shows?.topRatedShows)


  if (!nowPlayingMovies) return;
  if (!popularMovies) return;
  if (!topRatedMovies) return;
  if (!upcomingMovies) return;

  return (
    <>
      <div className="bg-black">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
        <MovieList title="Hollywood Movies" movies={popularMovies} />
        <MovieList title="Airing Today" movies={airingTodayShows} />
        <MovieList title="On the Air" movies={onTheAirShows} />
        <MovieList title="Popular Shows" movies={popularShows} />
        <MovieList title="Top Rated Shows" movies={topRatedShows} />
      </div>
    </>
  );
};

export default SecondaryContainer;
