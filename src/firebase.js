import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOsnrEm7qgwFDVNneXujhCtjkI4jhUlSg",
  authDomain: "ecommerce-gabrielachavez.firebaseapp.com",
  projectId: "ecommerce-gabrielachavez",
  storageBucket: "ecommerce-gabrielachavez.appspot.com",
  messagingSenderId: "121337633491",
  appId: "1:121337633491:web:21aed19276679c81739226"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)