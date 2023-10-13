import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedShows } from "../utils/showsSlice";

const useTopRatedShows = () => {
  const dispatch = useDispatch();

  const getTopRatedShows = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_Options
      );
      dispatch(addTopRatedShows(res.data.results));
    } catch {}
  };

  useEffect(() => {
    getTopRatedShows();
  }, []);
};

export default useTopRatedShows;
