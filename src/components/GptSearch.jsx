import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import bgImage from "../assetts/login_background.png";

import Logo from "../assetts/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const GptSearch = () => {
  const [selectedLang,setSelectedLanguage] = useState("en")
  
  const handleDropdown = (e) => {
    setSelectedLanguage(e.target.value)
  }

  return (
    <div>
      <div className="flex">
        <Link to="/">
          <div className=" absolute  px-8 py-2  ">
            <img className="w-30 ml-3  " src={Logo} alt="App Logo" />
          </div>
        </Link>
        <select onChange={handleDropdown} className="absolute top-[3%] right-[10%]  bg-[#e50914] text-white p-2 rounded-md  ">
          <option value="en" selected >English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
      <div className="fixed w-full h-full -z-10">
        <img
          src={bgImage}
          className="w-full h-full object-cover"
          alt="Login background"
        />
      </div>
      <GptSearchBar selectedLang={selectedLang}/>
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
