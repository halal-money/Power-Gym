"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVt54Mp0cAcgKDTW8V_EG7cVUWnBz_0_s",
  authDomain: "final-project-15717.firebaseapp.com",
  databaseURL: "https://final-project-15717-default-rtdb.firebaseio.com",
  projectId: "final-project-15717",
  storageBucket: "final-project-15717.appspot.com",
  messagingSenderId: "19296711014",
  appId: "1:19296711014:web:06ff5d62f6b1e914f4d8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(); 


signUp.addEventListener('click', (e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid),{
      username: username,
      email: email
    })
    alert("Succesfully signed up");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
// ..
});

})


  login.addEventListener('click', (e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid),{
      last_login: dt,
    })

      alert('User loged in');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);

    });


  });