import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCELK1-UlCTxG-t9PDBGMGDaJKuITz8rAE",
    authDomain: "todo-8e8e8.firebaseapp.com",
    databaseURL: "https://todo-8e8e8.firebaseio.com",
    projectId: "todo-8e8e8",
    storageBucket: "todo-8e8e8.appspot.com",
    messagingSenderId: "252428781923",
    appId: "1:252428781923:web:81857fa747ad39eb646b56",
    measurementId: "G-PTMZSVTY1Q"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;