// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHWqUkk53sr8cNrSkD-awWPUbarcht8o",
  authDomain: "verse-c9acd.firebaseapp.com",
  projectId: "verse-c9acd",
  storageBucket: "verse-c9acd.appspot.com",
  messagingSenderId: "76111488660",
  appId: "1:76111488660:web:1d3fbcc2232fbf40a4f681",
  measurementId: "G-XYNRSHCZNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
