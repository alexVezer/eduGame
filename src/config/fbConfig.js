import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCj8CAynG3OUFOoxIdgH8acXlTLfdYHGCo",
  authDomain: "edu-game-8d63b.firebaseapp.com",
  databaseURL: "https://edu-game-8d63b.firebaseio.com",
  projectId: "edu-game-8d63b",
  storageBucket: "edu-game-8d63b.appspot.com",
  messagingSenderId: "443537235050",
  appId: "1:443537235050:web:e32df4568d03b5ba827e13",
  measurementId: "G-JEFM1KEB47"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;