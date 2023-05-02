import { Fragment } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../hooks/PrivateRoute";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/:uid" element={<PrivateRoute Child={Home} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
