// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASEAPIKEY,
  authDomain: "chatapp-bbbf4.firebaseapp.com",
  projectId: "chatapp-bbbf4",
  storageBucket: "chatapp-bbbf4.appspot.com",
  messagingSenderId: "477891821071",
  appId: "1:477891821071:web:943403c48494e7e5366d7a",
  measurementId: "G-SHFB6V9EBN"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("logged in");
  } else {
    console.log("No user");
  }
});