// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQgipWVNDaOj07RrzCa7lertkyDgqxu5k",
    authDomain: "quiz-hub-10a0e.firebaseapp.com",
    projectId: "quiz-hub-10a0e",
    storageBucket: "quiz-hub-10a0e.appspot.com",
    messagingSenderId: "720005656741",
    appId: "1:720005656741:web:dd9e663d7eb33d1250dd4c",
    measurementId: "G-XGXGYHKX6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;