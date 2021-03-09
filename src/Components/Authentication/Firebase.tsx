import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// require("firebase/firestore");
const app = firebase.initializeApp({
  apiKey: "AIzaSyDsE2lYio8TM75yrWeFIfrNrxcbxH7-4iY",
  authDomain: "materials-development.firebaseapp.com",
  projectId: "materials-development",
  databaseURL: "https://materials-development-default-rtdb.firebaseio.com",
  storageBucket: "materials-development.appspot.com",
  messagingSenderId: "866402572522",
  appId: "1:866402572522:web:9d2228eeced23cd0289f93",
});
export const db = firebase.firestore();
export const auth = app.auth();
export const authGoogle = new firebase.auth.GoogleAuthProvider();
// if (window.location.hostname === "localhost" || window.location.hostname.startsWith('192.168.0.')) {  const ip = window.location.hostname;
//   db.settings({    host: ${ip}:8081,    ssl: false  })
// db.useEmulator(ip, 8081);  // functions.useEmulator(ip, 5001);  firebase.auth().useEmulator(http://${ip}:9098/);}
export default app;
