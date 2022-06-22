import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDd2ELUVVYG0XdCi8fiu4segTYmxlU9vZk',
  authDomain: 'gossipter.firebaseapp.com',
  projectId: 'gossipter',
  storageBucket: 'gossipter.appspot.com',
  messagingSenderId: '23880951350',
  appId: '1:23880951350:web:305cc29a89343f06f15a97',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFireStore, timestamp, projectAuth }
