import { useEffect } from "react";
import axios from "axios";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addOnTheAirShows } from "../utils/showsSlice";

const useOnTheAirShows = () => {
  const dispatch = useDispatch();

  const getOnTheAirShows = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_Options
      );
      dispatch(addOnTheAirShows(res.data.results));
    } catch {}
  };

  useEffect(() => {
    getOnTheAirShows();
  }, []);
};

export default useOnTheAirShows;
