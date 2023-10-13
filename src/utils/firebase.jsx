// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuG03MfVVGkTnrsDKg0gRMcmOUD0HXlI4",
  authDomain: "verse-streaming.firebaseapp.com",
  projectId: "verse-streaming",
  storageBucket: "verse-streaming.appspot.com",
  messagingSenderId: "618120015112",
  appId: "1:618120015112:web:12ed8bae5d0abc29e290bd",
  measurementId: "G-3E9CTJBC66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
