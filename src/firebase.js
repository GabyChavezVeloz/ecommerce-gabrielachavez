// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOsnrEm7qgwFDVNneXujhCtjkI4jhUlSg",
  authDomain: "ecommerce-gabrielachavez.firebaseapp.com",
  projectId: "ecommerce-gabrielachavez",
  storageBucket: "ecommerce-gabrielachavez.appspot.com",
  messagingSenderId: "121337633491",
  appId: "1:121337633491:web:21aed19276679c81739226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)