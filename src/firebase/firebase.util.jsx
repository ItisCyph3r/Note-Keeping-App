// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvPobKi3iDQes0C9krlBgHCxeH82AYXig",
    authDomain: "crowndb-c9f9c.firebaseapp.com",
    projectId: "crowndb-c9f9c",
    storageBucket: "crowndb-c9f9c.appspot.com",
    messagingSenderId: "930985227199",
    appId: "1:930985227199:web:1542d14d1926002837670a",
    measurementId: "G-X0MGXKD345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export default auth;