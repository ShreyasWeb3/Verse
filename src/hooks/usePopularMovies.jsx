import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const getPopularMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_Options
      );
      dispatch(addPopularMovies(res.data.results));
    } catch {}
  };

  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
