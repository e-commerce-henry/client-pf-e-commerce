import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALLiqcZ94AIF6Ghi8y7j4I0GKN7_HTLGs",
    authDomain: "e-commerce-4b15b.firebaseapp.com",
    projectId: "e-commerce-4b15b",
    storageBucket: "e-commerce-4b15b.appspot.com",
    messagingSenderId: "87910868464",
    appId: "1:87910868464:web:15af2ccc02a6456314a935",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
};

export { auth, signWithGoogle };