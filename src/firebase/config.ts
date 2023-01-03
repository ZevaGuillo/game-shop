// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4gNfS-WdXSWutOXSVG9vTFI9aYi3N1W0",
  authDomain: "game-shop-797f2.firebaseapp.com",
  projectId: "game-shop-797f2",
  storageBucket: "game-shop-797f2.appspot.com",
  messagingSenderId: "752904309486",
  appId: "1:752904309486:web:aa715a71e4de136fd5c1ff",
  measurementId: "G-TC11BGKBXN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );