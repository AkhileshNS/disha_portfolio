
import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyApg6BJIsH38cBzt6IY5u5LwDqGzhYZ_bs",
    authDomain: "dishakhantedportfolio.firebaseapp.com",
    databaseURL: "https://dishakhantedportfolio.firebaseio.com",
    projectId: "dishakhantedportfolio",
    storageBucket: "dishakhantedportfolio.appspot.com",
    messagingSenderId: "448363742705"
};

firebase.initializeApp(config);

export default firebase;
