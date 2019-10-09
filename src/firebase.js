import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBNFa4N-w1qZg0Ds4L27MfYyBmK2lMVpOY",
    authDomain: "m-city-6e363.firebaseapp.com",
    databaseURL: "https://m-city-6e363.firebaseio.com",
    projectId: "m-city-6e363",
    storageBucket: "",
    messagingSenderId: "658742598285",
    appId: "1:658742598285:web:cf7688260a47726394e0c4",
    measurementId: "G-ELB16EW28X"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}