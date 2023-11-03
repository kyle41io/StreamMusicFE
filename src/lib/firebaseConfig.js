import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "dolphin-music-is-life.firebaseapp.com",
  projectId: "dolphin-music-is-life",
  storageBucket: "dolphin-music-is-life.appspot.com",
  messagingSenderId: "587248320249",
  appId: "1:587248320249:web:b8185c8443bc16ff586c28",
});

const storage = getStorage(app);
export default storage;
