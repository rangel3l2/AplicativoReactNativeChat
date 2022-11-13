import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBEy_o6MG3NgDFLUvn-MtJRmgLiRhEgPGo",
  authDomain: "facebooktest-2eb67.firebaseapp.com",
  projectId: "facebooktest-2eb67",
  storageBucket: "facebooktest-2eb67.appspot.com",
  messagingSenderId: "304088888893",
  appId: "1:304088888893:web:42723e73f0e89479eadc54",
  measurementId: "G-J4SWB6KV78"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}
