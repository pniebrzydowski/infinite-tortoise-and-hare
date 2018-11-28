import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCU0dpMDsC__3z2ocqAr9jSAET0jLCl7Z4",
    authDomain: "infinite-tortoise-and-hare.firebaseapp.com",
    databaseURL: "https://infinite-tortoise-and-hare.firebaseio.com",
    projectId: "infinite-tortoise-and-hare",
    storageBucket: "infinite-tortoise-and-hare.appspot.com",
    messagingSenderId: "65125901892"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export {
    firestore
};
