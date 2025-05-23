// Firebase SDK v11
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC_nWdXUdXVekUKDGUMqxi6PSHumTpsgIA",
  authDomain: "infinite-inspire-ai.firebaseapp.com",
  projectId: "infinite-inspire-ai",
  storageBucket: "infinite-inspire-ai.firebasestorage.app",
  messagingSenderId: "202300103260",
  appId: "1:202300103260:web:2d15526f6d640b0617a499",
  measurementId: "G-8BSNBG2JHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "inspire-plus.html"; // redirect after login
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
    });
};

// Signup
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "inspire-plus.html"; // redirect after signup
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
    });
};
