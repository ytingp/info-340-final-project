import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SAMPLE_GROUPS from './data/groups.json'; //a sample list of GROUPS


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rWCvdJ15Yy-V5cH0ZzRC0xbdnztkMMs",
  authDomain: "looking-for-games-b8.firebaseapp.com",
  projectId: "looking-for-games-b8",
  storageBucket: "looking-for-games-b8.appspot.com",
  messagingSenderId: "469255977088",
  appId: "1:469255977088:web:d73eb9b1922eed96d00e65",
  measurementId: "G-WFB0Z26TGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App groups={SAMPLE_GROUPS} />
  </React.StrictMode>,
  document.getElementById('root')
);
