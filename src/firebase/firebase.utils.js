import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCXE_-ApHC3U7zyTJkZtcLO_RyULEydJDQ",
    authDomain: "crown-db-da883.firebaseapp.com",
    databaseURL: "https://crown-db-da883.firebaseio.com",
    projectId: "crown-db-da883",
    storageBucket: "",
    messagingSenderId: "996364679332",
    appId: "1:996364679332:web:54a92dd08a9ca3af"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;