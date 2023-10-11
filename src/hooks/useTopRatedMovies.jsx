import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_Options
      );
      dispatch(addTopRatedMovies(res.data.results));
    } catch {}
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
