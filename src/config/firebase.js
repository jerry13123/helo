// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-310kCjLzMMQzOGpufNZ9BmHs5G7ap1Y",
  authDomain: "jerry-project-48b1a.firebaseapp.com",
  projectId: "jerry-project-48b1a",
  storageBucket: "jerry-project-48b1a.appspot.com",
  messagingSenderId: "494424544024",
  appId: "1:494424544024:web:8ec648be4bacdce173446d",
  measurementId: "G-QL6BD9WPD3"
};
// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();