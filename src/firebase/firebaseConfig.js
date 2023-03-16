
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBETEQ0Z1R64GMITonzybEzze-vCF9M_bg",
    authDomain: "react-bfaf8.firebaseapp.com",
    projectId: "react-bfaf8",
    storageBucket: "react-bfaf8.appspot.com",
    messagingSenderId: "342257887984",
    appId: "1:342257887984:web:a9304ce03c45fe9d76b035"
};

/*
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  }; 
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;