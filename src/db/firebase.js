// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBt1P3b0gh5aSN-64aOBx6cIUiw2WcMYFQ",
    authDomain: "job-lib.firebaseapp.com",
    projectId: "job-lib",
    storageBucket: "job-lib.appspot.com",
    messagingSenderId: "7393133814",
    appId: "1:7393133814:web:abeed07c4e595ff57d18d7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);
