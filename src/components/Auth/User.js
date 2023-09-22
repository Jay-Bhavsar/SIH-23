import React, { useState, useEffect } from "react";
import Navbar from "../../components/Home/userNavbar";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { Link } from "react-router-dom";
// import Footer from "../Home/Footer";
// import DefaultSidebar from "../Home/Sidebar";

import { db } from "../../firebase";

function User() {
  const Userid = sessionStorage.getItem("uid");

  const [count, setCount] = useState(0);
  const [rejectedres, setRejectedres] = useState([]);
  const [approvedres, setApprovedres] = useState([]);
  const [reviewres, setReviewres] = useState([]);

  useEffect(() => {
    const rejectedresnumber = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", false)
          .where("rejected", "==", true)
          .get();

        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setRejectedres(data);
        console.log(data);
        console.log("Array Length:", data.length); // Get the length of the data array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const approvedresnumber = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", true)
          .where("rejected", "==", false)
          .get();

        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setApprovedres(data);
        console.log(data);
        console.log("Array Length:", data.length); // Get the length of the data array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const resinreview = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", false)
          .where("rejected", "==", false)
          .get();

        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setReviewres(data);
        console.log(data);
        console.log("Array Length:", data.length); // Get the length of the data array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    rejectedresnumber();
    approvedresnumber();
    resinreview();
  }, []);

  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br />
      <center>
      <div>Welcome to PGRKAM</div>

      </center>
      {/* <Footer /> */}
    </>
  );
}

export default User;
