import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_Options
      );
      dispatch(addNowPlayingMovies(res.data.results));
    } catch {}
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
