// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCBno4ruCmBjnGxeiqbjBI4SztBIoJb8PA",
  authDomain: "music-eb821.firebaseapp.com",
  projectId: "music-eb821",
  storageBucket: "music-eb821.appspot.com",
  messagingSenderId: "114456549902",
  appId: "1:114456549902:web:b8bd0f2356d12dad3ffa5f",
  measurementId: "G-7VLQJQWS9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
const analytics = getAnalytics(app);
