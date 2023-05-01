import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  let { userId } = useParams();
  return <div>{userId}</div>;
};

export default Home;
