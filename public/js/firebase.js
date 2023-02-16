// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
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

  var username =document.getElementById("username")
  var password =document.getElementById("password")

  window.signup = function(e){
    e.preventDefault();
    var obj = {
        username : username.value,
        password : password.value
    }
    createUserWithEmailAndPassword(auth, obj.username, obj.password)
    .then(function(success){
        alert("signup successfully")
    })
    .catch(function(err){
        alert("error" + err)
    })

    console.log(obj)
  };

    export {auth , app}