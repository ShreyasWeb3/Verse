import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_Options
      );
      dispatch(addUpcomingMovies(res.data.results));
    } catch {}
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
