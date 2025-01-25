// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhGNmCWWI1Cck0FsMMNc1vpeGYtCZRiWM",
  authDomain: "portfolio-63a48.firebaseapp.com",
  projectId: "portfolio-63a48",
  storageBucket: "portfolio-63a48.firebasestorage.app",
  messagingSenderId: "1076025235635",
  appId: "1:1076025235635:web:69173ae5d69c0f8ed4b8c6",
  measurementId: "G-BH2CMLQVNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);