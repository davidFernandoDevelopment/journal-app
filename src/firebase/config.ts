import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAAxVWGv3o0ufD-FQsSs1YVKna5WGqdxeA",
    authDomain: "journal-app-react-216ba.firebaseapp.com",
    projectId: "journal-app-react-216ba",
    storageBucket: "journal-app-react-216ba.appspot.com",
    messagingSenderId: "655883034870",
    appId: "1:655883034870:web:e6824c317b1c76b9878cd7"
};
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);