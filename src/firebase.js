import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyACefOQors69PTE1YWQdeFwVo3RnkdvirY",
  authDomain: "todo-app-frj.firebaseapp.com",
  projectId: "todo-app-frj",
  storageBucket: "todo-app-frj.appspot.com",
  messagingSenderId: "1054933462466",
  appId: "1:1054933462466:web:7095dc6867d4903ceeba5b",
  measurementId: "G-3WGNW0LCN2"
});

const db = firebaseApp.firestore();

export default db;
