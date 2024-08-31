// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8eeIqLENKFwpnKeU4B7m3NL63FlVE1gw",
  authDomain: "coder-next-7fc45.firebaseapp.com",
  projectId: "coder-next-7fc45",
  storageBucket: "coder-next-7fc45.appspot.com",
  messagingSenderId: "156318016334",
  appId: "1:156318016334:web:0372f4306430a5acc1741f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };