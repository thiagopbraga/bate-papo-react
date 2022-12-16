import { useState } from 'react';
import { Header } from './components/Header';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Chat } from './components/Chat';
function App() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyA37Ese085UtU3r6zNQHa1E91iAwU6DH3o",
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

  return (
    <>
      <Header />
      <Chat />
    </>
  )
}

export default App
