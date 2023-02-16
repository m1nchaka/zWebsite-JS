// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// import {signInUserWithEmailAndPassword} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk0SgMetNRnOVxSbpJ-IF7iCs5HOuJVMU",
  authDomain: "zwebsite-js-6f68f.firebaseapp.com",
  projectId: "zwebsite-js-6f68f",
  storageBucket: "zwebsite-js-6f68f.appspot.com",
  messagingSenderId: "144700694425",
  appId: "1:144700694425:web:8e6c0d04de55985bfd3d08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

var username =document.getElementById("username")
var password =document.getElementById("password")

window.login = function(e){
    e.preventDefault();
    var obj ={
        username: username.value,
        password: password.value
    };
    signInUserWithEmailAndPassword(auth, obj.username, obj.password)
    .then(function(success){
        console.log(user.uid)
        alert("Loggined successfully")
    })
    .catch(function(err){
        alert("login error" + err)
    })

    console.log(obj)
};

export {auth , app}