import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTHEH0kh4kZdJuB--tHWSsqe1LvPisIy4",
  authDomain: "chat-reenbit-d4712.firebaseapp.com",
  projectId: "chat-reenbit-d4712",
  storageBucket: "chat-reenbit-d4712.appspot.com",
  messagingSenderId: "398239796365",
  appId: "1:398239796365:web:4d7077a5c9cd8f896ba6c4"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { provider, auth}