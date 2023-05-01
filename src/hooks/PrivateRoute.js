import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import Login from "../pages/Login";

const PrivateRoute = ({ Child }) => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return !!currentUser ? <Child /> : <Login />;
};

export default PrivateRoute;
