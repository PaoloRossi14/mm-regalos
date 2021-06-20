import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClDg_Cxf9QdCTUQt5ZIoosW6QdaNK27uA",
  authDomain: "mm-regalos.firebaseapp.com",
  projectId: "mm-regalos",
  storageBucket: "mm-regalos.appspot.com",
  messagingSenderId: "644210082010",
  appId: "1:644210082010:web:d3cb24e9bb1dc5fef0e5e3",
  measurementId: "G-KQ43LWGQDP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
