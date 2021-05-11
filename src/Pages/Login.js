
import firebase from "firebase";// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBK561cjD-ZvYw0N1cQDgE-wG_FRWF8NvQ",
  authDomain: "kinbech-b95e4.firebaseapp.com",
  projectId: "kinbech-b95e4",
  storageBucket: "kinbech-b95e4.appspot.com",
  messagingSenderId: "969233127106",
  appId: "1:969233127106:web:c9819e9345090d57738d5b",
  measurementId: "G-18SDPSJMFD"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
export const google_provider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database();
export const storage = firebase.storage();
