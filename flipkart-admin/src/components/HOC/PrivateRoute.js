import React from "react";
import { Navigate } from "react-router-dom";
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
