// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTcDsrANx8sf0Ujehbp2Z-Svy5eeRdbs",
  authDomain: "netflixgpt-7eecf.firebaseapp.com",
  projectId: "netflixgpt-7eecf",
  storageBucket: "netflixgpt-7eecf.firebasestorage.app",
  messagingSenderId: "954287510187",
  appId: "1:954287510187:web:8800421453e527b4281dee",
  measurementId: "G-486PYK7WPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();