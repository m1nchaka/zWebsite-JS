
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAcAk0_vaM4QSfiCqJ2si37OqNbURpC9us",
      authDomain: "zwebsite-js-b40ef.firebaseapp.com",
      databaseURL: "https://zwebsite-js-b40ef-default-rtdb.firebaseio.com",
      projectId: "zwebsite-js-b40ef",
      storageBucket: "zwebsite-js-b40ef.appspot.com",
      messagingSenderId: "149750382535",
      appId: "1:149750382535:web:e9c3310a2c7cab671aa3e2"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    submitData.addEventListener('click', (e) =>{

        var email = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('user created successfully');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert('error message');
            });
    });

    export {auth , app}