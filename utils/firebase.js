import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// INISIALISASI FIREBASE
// console.log("\n\nENV :", process.env.FIREBASE_APIKEY);
const firebaseConfig = {
  apiKey: "AIzaSyBvF9xWzplaLFpitYSIfh0A09q2ylM0VIo",
  authDomain: "pemilihan-raya.firebaseapp.com",
  projectId: "pemilihan-raya",
  storageBucket: "pemilihan-raya.appspot.com",
  messagingSenderId: "933231502557",
  appId: "1:933231502557:web:fe5ba3a32b36063c46e734",
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

// FIRESTORE & AUTH ACCESSS
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
