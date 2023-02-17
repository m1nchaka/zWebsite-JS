// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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

let signupForm = document.getElementById('signin-form')

signupForm.onsubmit = async function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get('email')
    let password = formData.get('password')
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    //////////////////////////////////////////////
    // logout function
    // function signout() {
    //     localStorage.removeItem('user');
    //     window.location = "indexMain.html";
    // }
    // signoutButton.onclick = signout;

    try {
        let res = await signInWithEmailAndPassword(auth, email, password)
        let credentials = await res.user;
        localStorage.setItem('user', credentials.uid);
        alert('Login Successfully');
        window.location = "afterLoginPage.html";
        window.r
    } catch (err) {
        alert("Login Not successful")
    }
}

export { auth, app }