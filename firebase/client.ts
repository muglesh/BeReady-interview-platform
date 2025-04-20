// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBX78Xvn-TsdT-STCGkX1zhVlpVFrGmcO0",
    authDomain: "beready-34e4e.firebaseapp.com",
    projectId: "beready-34e4e",
    storageBucket: "beready-34e4e.firebasestorage.app",
    messagingSenderId: "223576077077",
    appId: "1:223576077077:web:f179a2659154853a2b6f1c",
    measurementId: "G-KNBWLLV6EC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);