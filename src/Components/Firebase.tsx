import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  apiKey: "AIzaSyDsE2lYio8TM75yrWeFIfrNrxcbxH7-4iY",
  authDomain: "materials-development.firebaseapp.com",
  projectId: "materials-development",
  storageBucket: "materials-development.appspot.com",
  messagingSenderId: "866402572522",
  appId: "1:866402572522:web:9d2228eeced23cd0289f93",
});
export const auth = app.auth();
export default app;
