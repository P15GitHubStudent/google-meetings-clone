import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as firebaseAuth from "firebase/auth";
// import { getDatabase } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const database = firebase.database(app);
const db = getFirestore();
export { auth, getAuth, db, createUserWithEmailAndPassword, firebaseAuth };
