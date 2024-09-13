import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekoboPXmMaRv0nEZYgqiWhsvpxXJ_WCo",
  authDomain: "reactchat-88ff1.firebaseapp.com",
  projectId: "reactchat-88ff1",
  storageBucket: "reactchat-88ff1.appspot.com",
  messagingSenderId: "34879592782",
  appId: "1:34879592782:web:e3d2ff70835a28070aa61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()