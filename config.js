import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCfMerBFzMZkVNyMgC16Ic9yeu_Rqs7nX0",
    authDomain: "project-71-ef4cc.firebaseapp.com",
    databaseURL: "https://project-71-ef4cc-default-rtdb.firebaseio.com",
    projectId: "project-71-ef4cc",
    storageBucket: "project-71-ef4cc.appspot.com",
    messagingSenderId: "1079458104111",
    appId: "1:1079458104111:web:b618791e64f2f4b0f5d7da"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
