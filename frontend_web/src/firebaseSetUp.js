import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALb52hwNz4tIZxvOMc6x9DmnLh162j7Q4",
    authDomain: "workout-app-9660c.firebaseapp.com",
    projectId: "workout-app-9660c",
    storageBucket: "workout-app-9660c.appspot.com",
    messagingSenderId: "132069873525",
    appId: "1:132069873525:web:0c311fdda30138b1a3e53c",
    measurementId: "G-QJYT9MTF1T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()
  const db = getFirestore();
  
  export {app, analytics, auth, db,}