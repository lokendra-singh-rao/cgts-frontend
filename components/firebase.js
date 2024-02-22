// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLGbWbFNuAljfKCK4BR5ATxjviVYU-87E",
  authDomain: "cgts-ayratech.firebaseapp.com",
  projectId: "cgts-ayratech",
  storageBucket: "cgts-ayratech.appspot.com",
  messagingSenderId: "858001283003",
  appId: "1:858001283003:web:8a53a7037569648296569e",
  measurementId: "G-SYJ15RNF69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;