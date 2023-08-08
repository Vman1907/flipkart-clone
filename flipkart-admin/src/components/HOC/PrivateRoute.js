import React from "react";
import { Home } from "../../containers/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { Signin } from "../../containers/Signin";
const PrivateRoute = (props) => {
  console.log("Inside Private Route");
  const token = window.localStorage.getItem("token");
  if (token) {
    console.log(token);
    return <div {...props} />;
  } else {
    console.log("token not found");
    return <Navigate to={"/signin"} />;
  }
};
export default PrivateRoute;
