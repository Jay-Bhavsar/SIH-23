/* eslint-disable import/no-anonymous-default-export */
import { db } from "../../firebase";

import {
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class userDataService {
  addUsers = (uid, userData) => {
    return setDoc(doc(db, "users", uid), {
      ...userData,
      uid: uid,
    });
  };

  getUser = (id) => {
    const Userid = sessionStorage.getItem("uid");
    const bookDoc = doc(db, "users", id);
    return getDocs(bookDoc);
  };
  getAllUsers = () => {
    const Userid = sessionStorage.getItem("uid");
    return getDocs(userCollectionRef);
  };
}

export default new userDataService();
