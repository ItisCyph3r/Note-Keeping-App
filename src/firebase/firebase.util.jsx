import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDvPobKi3iDQes0C9krlBgHCxeH82AYXig",
    authDomain: "crowndb-c9f9c.firebaseapp.com",
    projectId: "crowndb-c9f9c",
    storageBucket: "crowndb-c9f9c.appspot.com",
    messagingSenderId: "930985227199",
    appId: "1:930985227199:web:1542d14d1926002837670a",
    measurementId: "G-X0MGXKD345"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const createProfileDocument = async (userAuth, additionDetails) => {
    const {displayName, email, uid} = userAuth
    const createdAt = new Date();

    const docRef = await doc(db, "users", uid);

    const snapShot = await getDoc(docRef);

    if(!snapShot.exists()){
        try {
            await setDoc(doc(db, "users", uid), {
                email: email,
                displayName: displayName,
                createdAt: createdAt,
                ...additionDetails
            });
            console.log('successful')

        } catch (error) {
            console.log(error.message)
        }
    }
    else{
        console.log('user exists')
    }
    return snapShot;
}



export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;

    console.log(result)
    // ...
}).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
});
}

