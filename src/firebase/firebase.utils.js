import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
  apiKey: "AIzaSyCKdJTCgJ0nIF09tqRXSWE094zBJSTUsVU",
  authDomain: "crwn-db-4a043.firebaseapp.com",
  databaseURL: "https://crwn-db-4a043.firebaseio.com",
  projectId: "crwn-db-4a043",
  storageBucket: "crwn-db-4a043.appspot.com",
  messagingSenderId: "191413470135",
  appId: "1:191413470135:web:a22d69b85e795bbba35e32",
  measurementId: "G-K7XRVQ9LQ1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;