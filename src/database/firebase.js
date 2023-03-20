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
  apiKey: "AIzaSyD6EOQ-w84ihpR-Xf3bXNY8dpNxA8I9bb0",
  authDomain: "starxapp-b87f7.firebaseapp.com",
  projectId: "starxapp-b87f7",
  storageBucket: "starxapp-b87f7.appspot.com",
  messagingSenderId: "245080824566",
  appId: "1:245080824566:web:52de4fd3f5c032526e2ad7",
  measurementId: "G-7CRXNNMCQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
export {db}
