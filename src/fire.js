// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQmmenEK5rgIFbr56FO_Gv0wnX_SiW6ko",
  authDomain: "projectjs16-3fae6.firebaseapp.com",
  projectId: "projectjs16-3fae6",
  storageBucket: "projectjs16-3fae6.appspot.com",
  messagingSenderId: "1091835457618",
  appId: "1:1091835457618:web:150f25d2d5cb5c346c2f8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
