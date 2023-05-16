// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2rBsY9GQLDUlf-CK5s0_m_8Jb16LKDY0",
  authDomain: "projectjs-res.firebaseapp.com",
  projectId: "projectjs-res",
  storageBucket: "projectjs-res.appspot.com",
  messagingSenderId: "534031763737",
  appId: "1:534031763737:web:742a180531dcbcaef19d88",
  measurementId: "G-M3KRKXFKYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
