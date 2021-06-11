import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzi3J5CLqwwKMfhZRGU1avich90khR5lU",
    authDomain: "photo-arcade.firebaseapp.com",
    projectId: "photo-arcade",
    storageBucket: "photo-arcade.appspot.com",
    messagingSenderId: "544561417840",
    appId: "1:544561417840:web:aa95ce6bbd6b467a152eb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };