import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKLs7WZgY7b1En1Nldxqdo3_RAGdqhiuU",
  authDomain: "linked-in-c5044.firebaseapp.com",
  projectId: "linked-in-c5044",
  storageBucket: "linked-in-c5044.appspot.com",
  messagingSenderId: "330474394973",
  appId: "1:330474394973:web:39c6df0d5d375f605644b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
