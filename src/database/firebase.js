// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv0fZ910jBLaBvmphRvpix62wAyekK2uA",
  authDomain: "starx-2e105.firebaseapp.com",
  projectId: "starx-2e105",
  storageBucket: "starx-2e105.appspot.com",
  messagingSenderId: "551043929908",
  appId: "1:551043929908:web:1927e6dbd6628afcf5b761",
  measurementId: "G-6P3G22MX4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const db = getFirestore(app)
export { auth, db }
