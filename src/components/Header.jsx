import React, { useEffect } from "react";
import Logo from "../assetts/logo.png";
import profileBlueLogo from "../assetts/profileBlueLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShows } from '../utils/showsSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleShowsToggle = () => {
    dispatch(toggleShows())
  }

  const handleMoviesToggle = () => {
    dispatch(toggleShows(false))
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute px-4 z-10">
        <img className="w-35 ml-3" src={Logo} alt="App Logo" />
      </div>
      {user && (
        <div className=" flex justify-between text-white pt-6">
          <div className="px-4"></div>
          <div className="flex items-center md:space-x-5 md:mr-6 ">
            <div className="flex space-x-4 justify-around">
              <p className="cursor-pointer" onClick={handleShowsToggle}>Shows</p>
              <p className="cursor-pointer" onClick={handleMoviesToggle}>Movies</p>
            </div>
            <div className="flex space-x-4 items-center">
              <Link to="/search">
                <button className="p-1 ml-3 md:ml-0 md:p-2 text-xs md:text-md bg-[#e50914] rounded-lg">
                  <FontAwesomeIcon className="pr-2" icon={faMagnifyingGlass} />
                  AI Search
                </button>
              </Link>
              <img
                className="w-7 h-7 hidden md:inline rounded-sm"
                src={profileBlueLogo}
                alt="Profile Icon"
              />
              <p className="hidden md:block">{user?.displayName}</p>
              <FontAwesomeIcon
                className="cursor-pointer pr-4 "
                onClick={handleSignOut}
                icon={faRightFromBracket}
              />
            </div>
            <div className="fixed -z-50 w-full h-full inset-0 bg-black "></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
