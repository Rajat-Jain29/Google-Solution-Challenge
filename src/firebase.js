import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA5qw6SjiOZidaXqYZiEDIj38XkR9asORg",
  authDomain: "zero-hunger-b4df6.firebaseapp.com",
  projectId: "zero-hunger-b4df6",
  storageBucket: "zero-hunger-b4df6.appspot.com",
  messagingSenderId: "328657015187",
  appId: "1:328657015187:web:4841c14de09e1a89041866",
  measurementId: "G-BVMDD4M34D"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export const  db = firebaseApp.firestore()
  export const auth = firebaseApp.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  

  