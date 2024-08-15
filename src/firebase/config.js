// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFmW1KfvQavWNSum4pbZQlZkoNjGyYJW0",
  authDomain: "react-cursos-1970b.firebaseapp.com",
  projectId: "react-cursos-1970b",
  storageBucket: "react-cursos-1970b.appspot.com",
  messagingSenderId: "397584542955",
  appId: "1:397584542955:web:64498be877cf0a084ce2ae"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );