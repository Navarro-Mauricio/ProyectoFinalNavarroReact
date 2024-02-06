import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDKD5R4EKkVZViCnwv0B9X2tMtJFCtlp_k",
  authDomain: "sebs-calcos.firebaseapp.com",
  projectId: "sebs-calcos",
  storageBucket: "sebs-calcos.appspot.com",
  messagingSenderId: "217605904025",
  appId: "1:217605904025:web:d771b589249d87b7930a08"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);