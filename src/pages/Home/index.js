import React from "react";
//import { useParams } from "react-router-dom";
import app from "../../service/firebase";

const Home = () => {
  //let { userId } = useParams();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
