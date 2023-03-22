// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDwej_pNbsG0krMtfmZ6-KKk3w2ZzHzSw",
  authDomain: "rdmovie-3a123.firebaseapp.com",
  projectId: "rdmovie-3a123",
  storageBucket: "rdmovie-3a123.appspot.com",
  messagingSenderId: "657845939610",
  appId: "1:657845939610:web:440628689efd52722a5e23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();