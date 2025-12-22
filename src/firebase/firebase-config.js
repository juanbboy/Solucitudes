import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";          // Para Cloud Firestore
import { getAuth } from "firebase/auth"; // Para autenticación

const firebaseConfig = {
  apiKey: "AIzaSyCSaJzJYoLaAhDK7w55MC4Oz4MVvxjUE4E",
  authDomain: "react-auth-app-6a340.firebaseapp.com",
  projectId: "react-auth-app-6a340",
  storageBucket: "react-auth-app-6a340.appspot.com",
  messagingSenderId: "778269297947",
  appId: "1:778269297947:web:fe855452be4a5d767257be",
  measurementId: "G-960E23P220"
};

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
