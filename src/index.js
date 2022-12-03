import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjJ8NkvrZtfM9sCFrZLY81vTwV8gMN4Wc",
  authDomain: "china-supermercado.firebaseapp.com",
  projectId: "china-supermercado",
  storageBucket: "china-supermercado.appspot.com",
  messagingSenderId: "39411382560",
  appId: "1:39411382560:web:c7ac7114a721ea3c647f45"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode>  */}
  </>
);