import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "netflix-gpt-d380a",
  storageBucket: "netflix-gpt-d380a.appspot.com",
  messagingSenderId: "361940348322",
  appId: "1:361940348322:web:50b7e4371ee3885f2c96fb",
  measurementId: "G-YMY6BBN7YB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
