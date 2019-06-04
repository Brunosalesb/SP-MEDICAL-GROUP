import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZOb37oj0bAFwJFODtotrPWLo4qAu3L_o",
    authDomain: "spmedicalgroup-be8ef.firebaseapp.com",
    databaseURL: "https://spmedicalgroup-be8ef.firebaseio.com",
    projectId: "spmedicalgroup-be8ef",
    storageBucket: "spmedicalgroup-be8ef.appspot.com",
    messagingSenderId: "523490353793",
    appId: "1:523490353793:web:5db66c0dbaf6e58b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;