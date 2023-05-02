import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import app, { userCollection } from "../../service/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const { uid } = useParams();

  const [user, setUser] = useState({});

  const handleSignOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>{"user.name"}</h1>
      <button onClick={() => handleSignOut()}>Sign out</button>
    </div>
  );
};

export default Home;
