import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTttD7wlNoqL0BRrQA8vBcTzk7swixxRY",
  authDomain: "time-319df.firebaseapp.com",
  projectId: "time-319df",
  storageBucket: "time-319df.appspot.com",
  messagingSenderId: "153100075344",
  appId: "1:153100075344:web:94f6cd63c86436c755ec55",
  measurementId: "G-DJN5HZBH6V",
};

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
