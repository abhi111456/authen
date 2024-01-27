
// import { initializeApp } from "firebase/compat/app";
// import firebase from 'firebase/compat/auth'
// import 'firebase/compat/auth';
// import 'firebase/compat/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDBgBuJbMneHPISDs4Qk0dslvmkNEVG0SA",
  authDomain: "react-firebase-auth-d8b59.firebaseapp.com",
  projectId: "react-firebase-auth-d8b59",
  storageBucket: "react-firebase-auth-d8b59.appspot.com",
  messagingSenderId: "691688834630",
  appId: "1:691688834630:web:8ce8609e61aa1928cdac47"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;