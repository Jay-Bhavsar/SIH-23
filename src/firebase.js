// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTRJUcTOjuTlPjo4BlBqUTOvJM2Y1-PMw",
  authDomain: "pgrkam-683e5.firebaseapp.com",
  projectId: "pgrkam-683e5",
  storageBucket: "pgrkam-683e5.appspot.com",
  messagingSenderId: "339913483137",
  appId: "1:339913483137:web:74c6ca174dcfb43f903e80",
  measurementId: "G-N8G48H9MRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;