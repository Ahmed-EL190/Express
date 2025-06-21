// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC20oZrQaQwmm6ppBr05zvtfAvXfLKBGcg",
  authDomain: "ali-express-f814a.firebaseapp.com",
  projectId: "ali-express-f814a",
  storageBucket: "ali-express-f814a.firebasestorage.app",
  messagingSenderId: "210427999229",
  appId: "1:210427999229:web:5e30dca416acaa5c599f94",
  measurementId: "G-D2R8QXLGQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;