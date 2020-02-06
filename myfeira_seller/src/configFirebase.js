import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyB5T6abe4whx-xuqpleFG0dMd55eXlzQfo",
    authDomain: "minhafeira-294e6.firebaseapp.com",
    databaseURL: "https://minhafeira-294e6.firebaseio.com",
    projectId: "minhafeira-294e6",
    storageBucket: "minhafeira-294e6.appspot.com",
    messagingSenderId: "1094429504782",
    appId: "1:1094429504782:web:eaede12b92affebabd535f",
    measurementId: "G-7D6DB74CK8"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

db.enablePersistence({experimentalTabSynchronization:true})

const storage = firebase.storage()

export default {
  db,
  storage
}