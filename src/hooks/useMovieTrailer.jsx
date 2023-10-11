import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const selectedMovieKey = useSelector((store) => store.movies?.selectedMovie);

  const getNowPlayingMovies = async () => {
    try {
      const movieToFetch = selectedMovieKey?.movieId || movieId;

      if (!movieToFetch) return;

      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieToFetch}/videos?language=en-US`,
        API_Options
      );
      const filteredTrailer = res.data.results.filter(
        (video) => video.type === "Trailer" && video.name === "Official Trailer"
      );
      const filteredTeasers = res.data.results.filter(
        (video) => video.type === "Teaser"
      );
      const teaser = filteredTeasers[0];
      const newTrailer = filteredTrailer.length
        ? filteredTrailer
        : res.data.results[0];
      dispatch(addMovieTrailer(newTrailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [selectedMovieKey]);
};

export default useMovieTrailer;
