import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "millionaire-quiz-f13b5.firebaseapp.com",
  projectId: "millionaire-quiz-f13b5",
  storageBucket: "millionaire-quiz-f13b5.firebasestorage.app",
  messagingSenderId: "393465956566",
  appId: "1:393465956566:web:6159c02666b74bd411e177",
  measurementId: "G-G3XGG4J241"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    auth,
    db
}