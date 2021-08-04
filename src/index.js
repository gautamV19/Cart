import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaHbwonMEZaRVwS4HIFV1licsSZBbiBSs",
  authDomain: "cart-66397.firebaseapp.com",
  projectId: "cart-66397",
  storageBucket: "cart-66397.appspot.com",
  messagingSenderId: "679343662364",
  appId: "1:679343662364:web:ad50c46d958c8b2a6d06d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();