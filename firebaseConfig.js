import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGzKQxKP3YOB6rrExLCUtkAydtn2zCqyk",
  authDomain: "simon-says-f5a66.firebaseapp.com",
  projectId: "simon-says-f5a66",
  storageBucket: "simon-says-f5a66.firebasestorage.app",
  messagingSenderId: "713870369315",
  appId: "1:713870369315:web:9de43da2ff810dbe758796"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
