import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDucyW-H20Ncxyrn1RqIDWpSJAYgdhBfhg",
  authDomain: "raj-chatapp.firebaseapp.com",
  projectId: "raj-chatapp",
  storageBucket: "raj-chatapp.appspot.com",
  messagingSenderId: "982405350041",
  appId: "1:982405350041:web:81f9fe98d83e5ca0b56e08"
};


export const app = initializeApp(firebaseConfig);