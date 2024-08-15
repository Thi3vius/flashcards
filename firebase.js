// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpCIHbXltnLl8MmpF2uckAjmAOGob6Uto",
  authDomain: "flashcards-5f8c7.firebaseapp.com",
  projectId: "flashcards-5f8c7",
  storageBucket: "flashcards-5f8c7.appspot.com",
  messagingSenderId: "785851771137",
  appId: "1:785851771137:web:28514942edb5cb8ab81300",
  measurementId: "G-TR71MHDZK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default db;
