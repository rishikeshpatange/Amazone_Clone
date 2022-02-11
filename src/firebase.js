import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_7ALyOstk8yejHYb96zi8XVq6lSE2L_c",
    authDomain: "clone-979a7.firebaseapp.com",
    projectId: "clone-979a7",
    storageBucket: "clone-979a7.appspot.com",
    messagingSenderId: "386419542062",
    appId: "1:386419542062:web:016cba8bf63f93d70af7bf",
    measurementId: "G-BEJP2ZH47Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };