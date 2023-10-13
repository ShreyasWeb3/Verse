import { useRef } from "react";
import language from "../utils/languageConstants";
import openai from "../utils/openAI";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = ({ selectedLang }) => {
  const lang = language[selectedLang];
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const SearchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();

    return json.results;
  };

  // https://api.themoviedb.org/3/search/movie?query=don&include_adult=false&language=en-US&page=1

  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me 5 movies, and they need to be comma seperated";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieResults =
      chatCompletion.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovieResults.map((movie) => SearchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames:gptMovieResults, movieResults:tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center mb-6 ">
      <form className="grid-cols-12 mt-10 md:mt-0" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="w-[350px] md:w-[450px] relative z-10 text-white p-4 m-4 ml-8 md:ml-0 col-span-9 placeholder:text-zinc-400 rounded-md bg-[rgba(0,0,0,0.75)]"
          placeholder={lang.gptSearchPlaceholder}
        />
        <button
          className="relative font-bold z-10  col-span-3 px-8 py-4 bg-[#e50914] opacity-100 text-white rounded-md ml-32 md:ml-0 "
          onClick={handleGPTSearch}
        >
          {lang.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
