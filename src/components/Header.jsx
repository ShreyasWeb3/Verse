import React, { useEffect } from "react";
import Logo from "../assetts/logo.png";
import profileBlueLogo from "../assetts/profileBlueLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

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
    <div className="bg-black text-white">
      <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-30 ml-3 " src={Logo} alt="App Logo" />
      </div>
      {user && (
        <div className="flex space-x-5 justify-around py-6 ">
          <div className="flex space-x-5 ">
            <p className="ml-8">Home</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>New & Popular</p>
            <p>My List</p>
            <p>Browse by Language</p>
          </div>
          <div className="flex space-x-5 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <img className="-mt-2" src={profileBlueLogo} alt="Profile Icon" />
            <p>{user?.displayName}</p>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={handleSignOut}
              icon={faRightFromBracket}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
