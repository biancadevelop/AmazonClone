// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJVTxI1PzKy3omtzZf7ILBMDmScHlLPKU",
  authDomain: "challenge-f7914.firebaseapp.com",
  projectId: "challenge-f7914",
  storageBucket: "challenge-f7914.appspot.com",
  messagingSenderId: "610262166961",
  appId: "1:610262166961:web:22b81f586df405adf72190",
  measurementId: "G-ST2J3F0T9Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//initializes our firebase Config file

const db = firebaseApp.firestore(); //handles firebase database
const auth = firebase.auth(); //handles firebase authenication

export { db, auth };
