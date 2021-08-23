import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOm4zY2O6vmx9coywjWecZDKoJMFhWJUc",
  authDomain: "whatsapp-clone-1bf35.firebaseapp.com",
  projectId: "whatsapp-clone-1bf35",
  storageBucket: "whatsapp-clone-1bf35.appspot.com",
  messagingSenderId: "66935035180",
  appId: "1:66935035180:web:58b06e8c311adbce83c889",
  measurementId: "G-PZ16F25VFF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
