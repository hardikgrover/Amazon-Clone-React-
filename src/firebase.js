// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDw245vRYtMQgeiEggVPrkXsJ5jNxnr1l8",
  authDomain: "challange-d6fb8.firebaseapp.com",
  projectId: "challange-d6fb8",
  storageBucket: "challange-d6fb8.appspot.com",
  messagingSenderId: "329446814572",
  appId: "1:329446814572:web:0e5d3f30f5ec1ca35ff949",
  measurementId: "G-DCRQK12FLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };