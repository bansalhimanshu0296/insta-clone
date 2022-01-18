// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp6LQd_RNW_b_ZOi2qbP-700K3VArGXUQ",
  authDomain: "insta-clone-next.firebaseapp.com",
  projectId: "insta-clone-next",
  storageBucket: "insta-clone-next.appspot.com",
  messagingSenderId: "113912373668",
  appId: "1:113912373668:web:f0ac5d80e3b73484592131"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage(); 

export { app, db, storage };