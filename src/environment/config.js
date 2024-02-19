// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPFjHRoOSQxaVidQqXiTLSSZuwF4LrWOY",
  authDomain: "myproject-2ad32.firebaseapp.com",
  projectId: "myproject-2ad32",
  storageBucket: "myproject-2ad32.appspot.com",
  messagingSenderId: "626994691212",
  appId: "1:626994691212:web:04585f874c4353a4ef8fa9",
  measurementId: "G-9SXTHE6HJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);