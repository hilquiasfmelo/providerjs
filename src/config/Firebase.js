import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEzvL_jhOQOIOdUAyp3vJnHf9UUIBqU48",
  authDomain: "providerjs.firebaseapp.com",
  databaseURL: "https://providerjs.firebaseio.com",
  projectId: "providerjs",
  storageBucket: "providerjs.appspot.com",
  messagingSenderId: "594713630968",
  appId: "1:594713630968:web:1db266377cb351108f030d",
  measurementId: "G-L4WZ18YVKM"
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
