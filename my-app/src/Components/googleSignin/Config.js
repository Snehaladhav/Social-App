
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFB3ds3OuBybMHElX_F6Wr3wcyHy_nZZY",
  authDomain: "social-app-6e4a6.firebaseapp.com",
  projectId: "social-app-6e4a6",
  storageBucket: "social-app-6e4a6.appspot.com",
  messagingSenderId: "452383229744",
  appId: "1:452383229744:web:6f5f45f6954311c6272af5",
  measurementId: "G-9JGEKHWKJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};