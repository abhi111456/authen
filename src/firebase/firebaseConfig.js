import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyDBgBuJbMneHPISDs4Qk0dslvmkNEVG0SA",

  authDomain: "react-firebase-auth-d8b59.firebaseapp.com",

  projectId: "react-firebase-auth-d8b59",

  storageBucket: "react-firebase-auth-d8b59.appspot.com",

  messagingSenderId: "691688834630",

  appId: "1:691688834630:web:8ce8609e61aa1928cdac47"

};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)