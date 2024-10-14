// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBG4VJj9YEtvY3IBOVLarl-mz4iy9xxqyE",
  authDomain: "vault24-28c93.firebaseapp.com",
  projectId: "vault24-28c93",
  storageBucket: "vault24-28c93.appspot.com",
  messagingSenderId: "122602902084",
  appId: "1:122602902084:web:241e4c4b11b37fc7b4e211",
  measurementId: "G-R5K4PEXF0K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const signInWithGoogle = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
