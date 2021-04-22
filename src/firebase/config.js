import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBf89WXYR-Q8T-DLSxuDUGzmQibuakIr9o",
    authDomain: "firegram-f5d8b.firebaseapp.com",
    projectId: "firegram-f5d8b",
    storageBucket: "firegram-f5d8b.appspot.com",
    messagingSenderId: "342625688060",
    appId: "1:342625688060:web:26fa978dbc25874d607a79",
    measurementId: "G-FL2RMR4YSZ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };