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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth
      const createAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log("error creating user", error.mesage)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;