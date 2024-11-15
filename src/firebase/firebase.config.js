// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO6oY3R4y7V0PH-gtFeF71IxrkvscYGbc",
  authDomain: "dragon-news-bbfd7.firebaseapp.com",
  projectId: "dragon-news-bbfd7",
  storageBucket: "dragon-news-bbfd7.firebasestorage.app",
  messagingSenderId: "6319029146",
  appId: "1:6319029146:web:f74d0964f8efab563c9823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app