import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./main.css";
import { ChakraProvider } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBETEQ0Z1R64GMITonzybEzze-vCF9M_bg",
  authDomain: "react-bfaf8.firebaseapp.com",
  projectId: "react-bfaf8",
  storageBucket: "react-bfaf8.appspot.com",
  messagingSenderId: "342257887984",
  appId: "1:342257887984:web:a9304ce03c45fe9d76b035"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
