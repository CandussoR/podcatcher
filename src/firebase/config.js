import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCeQAekZs7LstCBUeHZsKeXHMuldywmLCc",
    authDomain: "vue-firebase-sites-5f251.firebaseapp.com",
    projectId: "vue-firebase-sites-5f251",
    storageBucket: "vue-firebase-sites-5f251.appspot.com",
    messagingSenderId: "122385495945",
    appId: "1:122385495945:web:ad6a91527b878dcd705358"
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  const auth = getAuth(app)

  export { app, db, auth}