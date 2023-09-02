import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgMR2FTYJROL0MpYlkq0_yjXGX1_VC0U0",
  authDomain: "ecommerce-6cd9f.firebaseapp.com",
  projectId: "ecommerce-6cd9f",
  storageBucket: "ecommerce-6cd9f.appspot.com",
  messagingSenderId: "192681914337",
  appId: "1:192681914337:web:2b20a237dd34c5aca1aca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()