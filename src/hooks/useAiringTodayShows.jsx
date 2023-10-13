import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAiringTodayShows } from "../utils/showsSlice";

const useAiringTodayShows = () => {
  const dispatch = useDispatch();

  const getAiringTodayShows = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        API_Options
      );
      dispatch(addAiringTodayShows(res.data.results));
    } catch {}
  };

  useEffect(() => {
    getAiringTodayShows();
  }, []);
};

export default useAiringTodayShows;
