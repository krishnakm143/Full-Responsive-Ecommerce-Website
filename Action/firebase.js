

// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBG7a_NVyLCg-CmT1Rm8S0zSKOGVcKgxdQ",
  authDomain: "eccomerce-c984a.firebaseapp.com",
  projectId: "eccomerce-c984a",
  storageBucket: "eccomerce-c984a.appspot.com",
  messagingSenderId: "472133523699",
  appId: "1:472133523699:web:394116e2749905c4f7bf86",
  measurementId: "G-SE54B0GPNB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore
const rtdb = getDatabase(app); // Realtime Database
const auth = getAuth(app); // Authentication
const storage = getStorage(app); // Storage


export { app, db, rtdb, auth, storage };
