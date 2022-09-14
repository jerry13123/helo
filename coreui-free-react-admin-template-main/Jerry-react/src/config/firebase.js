// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCK6HEBiQsxR-7mNBB51yPGd-WkiQLwWA",
  authDomain: "jerry-react.firebaseapp.com",
  projectId: "jerry-react",
  storageBucket: "jerry-react.appspot.com",
  messagingSenderId: "982542297278",
  appId: "1:982542297278:web:f09598a38235b4e74816ef",
  measurementId: "G-SX4C9FZD63"
};

// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();