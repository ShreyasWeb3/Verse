import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAiringTodayShows from "../hooks/useAiringTodayShows";
import useOnTheAirShows from "../hooks/useOnTheAirShows";
import usePopularShows from "../hooks/usePopularShows";
import useTopRatedShows from "../hooks/useTopRatedShows";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayShows();
  useOnTheAirShows();
  usePopularShows();
  useTopRatedShows();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
