import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBheZ60kIYu3aE3mevEwREZZIq-2InI3bk",
    authDomain: "linkedin-clone-c8932.firebaseapp.com",
    projectId: "linkedin-clone-c8932",
    storageBucket: "linkedin-clone-c8932.appspot.com",
    messagingSenderId: "548831040833",
    appId: "1:548831040833:web:2a1ee327912d52f319fdc0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { db, auth};