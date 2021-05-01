import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyCn2D_SqzSZ4xX5p1RcOsdq0Ii-jHmvGvw",
  authDomain: "barter-system-app-3a5b1.firebaseapp.com",
  projectId: "barter-system-app-3a5b1",
  storageBucket: "barter-system-app-3a5b1.appspot.com",
  messagingSenderId: "148643101141",
  appId: "1:148643101141:web:b3ac6cf5eb09e10c07e55c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();