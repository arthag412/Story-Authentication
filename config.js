import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB4B_LCPPPLMW21SZXNw3rnTGiUDpxszdw",
  authDomain: "story-366af.firebaseapp.com",
  databaseURL: "https://story-366af-default-rtdb.firebaseio.com",
  projectId: "story-366af",
  storageBucket: "story-366af.appspot.com",
  messagingSenderId: "890571543497",
  appId: "1:890571543497:web:d5cc92d0352c0e2bf14e18"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   