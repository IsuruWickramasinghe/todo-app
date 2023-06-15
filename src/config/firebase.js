import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAZ9RN1zwtIhLwxSbmbHWWjigcRMK2CV8o",
  authDomain: "todo-app-770aa.firebaseapp.com",
  projectId: "todo-app-770aa",
  storageBucket: "todo-app-770aa.appspot.com",
  messagingSenderId: "898254686661",
  appId: "1:898254686661:web:41fc30914f6cd39e2623ac",
  measurementId: "G-S6G3EDKDFB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
