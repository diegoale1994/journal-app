import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ4_O-iuDuY0EoTNANT2afaIWeA_1_jlE",
    authDomain: "journal-app-31b7b.firebaseapp.com",
    projectId: "journal-app-31b7b",
    storageBucket: "journal-app-31b7b.appspot.com",
    messagingSenderId: "462520719787",
    appId: "1:462520719787:web:f1586df0b3dc3d5b2e9aee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}