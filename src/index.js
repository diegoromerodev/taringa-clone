import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const firebaseConfig = {
  apiKey: "AIzaSyDbCewM5bUAt_lAOyLXXN0XLUGyPyf--hE",
  authDomain: "taringa-ef574.firebaseapp.com",
  projectId: "taringa-ef574",
  storageBucket: "taringa-ef574.appspot.com",
  messagingSenderId: "386142615120",
  appId: "1:386142615120:web:6ed84c70d230db92f0c355",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
