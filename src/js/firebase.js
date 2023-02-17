// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
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
//   const analytics = getAnalytics(app);

const auth = getAuth()

// let username = document.getElementById("username")
// let password = document.getElementById("password")
let signupForm = document.getElementById('signup-form')

signupForm.onsubmit = async function (event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let email = formData.get('email')
  let password = formData.get('password')
  console.log(formData.get('email'))
  console.log(formData.get('password'))

  try { 
    let res = await createUserWithEmailAndPassword(auth, email, password)
    console.log(res);
    alert('Submit Successfully')
    window.location = "indexMain.html";
  } catch (err) {
    alert("Submit Not successful")
  }

}

export { auth, app }