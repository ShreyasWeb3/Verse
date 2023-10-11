import React, { useRef, useState } from "react";
import Header from "./Header";
import bgImage from "../assetts/login_background.png";
import { checkVaildData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [captcha, setCaptcha] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [savePassword, setSavePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handlePasswordSave = () => {
    setSavePassword(!savePassword);
  };

  const handleSignInSignUpClick = () => {
    const message = checkVaildData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {})
            .catch((error) => {
              setErrorMessage(error.ReactMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };

  return (
    <div >
      <Header />
      <div className="absolute w-full h-full">
        <img
          src={bgImage}
          className="w-full h-full object-cover "
          alt="Login background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        autoComplete={savePassword ? "on" : "off"}
        className="mx-auto mt-28 right-0 left-0 p-10 absolute bg-[rgba(0,0,0,.75)] w-[380px] h-[580px] rounded-[4px]"
      >
        <h2 className="text-white m-2 text-2xl font-medium">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            name="username"
            ref={userName}
            placeholder="Enter Username"
            className="p-2 m-1 bg-[#333] text-white rounded-[4px] placeholder:text-slate-300 placeholder:font-light placeholder:opacity-50  px-12 py-2 text-center"
          />
        )}
        <input
          type="text"
          name="email"
          ref={email}
          placeholder="Email or phone number"
          className="p-2 m-1 bg-[#333] text-white rounded-[4px] placeholder:text-slate-300 placeholder:font-light placeholder:opacity-50  px-12 py-2 text-center"
        />
        <input
          type="password"
          name="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-1 bg-[#333] text-white rounded-[4px] px-12 py-2 text-center placeholder:text-slate-300 placeholder:font-light placeholder:opacity-50"
        />
        <p className="text-orange-300 text-xs m-1">{errorMessage}</p>
        <button
          type="submit"
          className="px-28 py-2 m-1 mt-6 text-center bg-[#e50914] text-white rounded-[4px]"
          onClick={handleSignInSignUpClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="m-1">
          <input
            className="cursor-pointer"
            onClick={handlePasswordSave}
            type="checkbox"
          />{" "}
          <label htmlFor="rememberMe" className="text-gray-400 text-xs ">
            Remember me
          </label>
        </div>
        <p className="text-gray-400 text-sm pb-3 m-1 mt-4">
          {isSignIn ? "New to Netflix?," : "Already registered?,"}
          <span onClick={handleSignUp} className="text-white cursor-pointer">
            {isSignIn ? " Sign up now." : " Sign in now."}
          </span>
        </p>

        <p className="text-gray-400 text-xs m-1">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <p
            className="text-blue-600 cursor-pointer"
            onClick={() => setCaptcha(!captcha)}
          >
            {" "}
            Learn more.
          </p>
          {captcha && (
            <p className="mt-2">
              The information The information collected by Google reCAPTCHA is
              subject to the Google{" "}
              <a
                className="text-blue-600 cursor-pointer"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="text-blue-600 cursor-pointer"
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalised advertising by Google).
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
