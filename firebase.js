// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import {initializeApp, getApp, getApps} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjIx4__1_2vp2LrJtbqC_CKKrj7gbCVFI",
  authDomain: "pantry-tracker-8eb30.firebaseapp.com",
  projectId: "pantry-tracker-8eb30",
  storageBucket: "pantry-tracker-8eb30.appspot.com",
  messagingSenderId: "634314112076",
  appId: "1:634314112076:web:591e4b27d20032d31a48e9",
  measurementId: "G-D563J10V8M"
};

let auth;
let firestore;
let analytics;
if (typeof window !== "undefined"){
  // Initialize Firebase
  const app = !getApps().length ? initializeApp (firebaseConfig) : getApp();
  auth = getAuth(app);
  firestore = getFirestore(app);
  analytics =getAnalytics(app);
}

export {auth, firestore, analytics}