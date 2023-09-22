import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "../Style/Login.css";
import "firebase/compat/auth";
import Navbar from "../Home/Navbar";

// Initialize Firebase with your project config
const firebaseConfig = {
  apiKey: "AIzaSyBTRJUcTOjuTlPjo4BlBqUTOvJM2Y1-PMw",
  authDomain: "pgrkam-683e5.firebaseapp.com",
  projectId: "pgrkam-683e5",
  storageBucket: "pgrkam-683e5.appspot.com",
  messagingSenderId: "339913483137",
  appId: "1:339913483137:web:74c6ca174dcfb43f903e80",
  measurementId: "G-N8G48H9MRG"
};

firebase.initializeApp(firebaseConfig);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent successfully!");
      })
      .catch((error) => {
        // Handle errors, e.g. invalid email
        console.error("Error sending reset email:", error);
      });
  };

  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <div className="text-center oneliner">
        <h1>'Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <center>
        <div className="flex flex-col justify-center mt-10 shadow-xl p-4 forgot  w-[90%] md:w-[45%] ">
          <h3 className="">Forgot Password</h3>
          <center>
          <h2 className="mt-6 w-[60%] text-justify ">
            Enter the Email address associated with your account and we'll send
            you a link to reset your password:
          </h2>
          </center>
        
          <br />
          <center>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[50%] border-blue-700"
            />
          </center>
          
          <center>
            <button onClick={handleResetPassword} className="">
              Reset Password
            </button>
          </center>
        </div>
      </center>
    </>
  );
};

export default ForgotPassword;
