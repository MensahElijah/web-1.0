
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCG4pjf69fuapTjiaOPB90kv_1NBo3o1WE",
  authDomain: "g-height.firebaseapp.com",
  projectId: "g-height",
  storageBucket: "g-height.appspot.com",
  messagingSenderId: "933865157524",
  appId: "1:933865157524:web:f252de89bfadfcfaa61581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)