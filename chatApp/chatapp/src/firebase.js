import firebase from "firebase/app";
import "firebase/auth" ;
import "firebase/database" ;
import "firebase/storage" ;

var firebaseConfig = {
    apiKey: "AIzaSyDiK58aPnkz2wjqDL8YaIdULNKQcYItx-M",
    authDomain: "chatapp-fd002.firebaseapp.com",
    projectId: "chatapp-fd002",
    storageBucket: "chatapp-fd002.appspot.com",
    messagingSenderId: "447163890196",
    appId: "1:447163890196:web:45123766bcb6be39ac4501",
    measurementId: "G-77SBSCK5T8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase;