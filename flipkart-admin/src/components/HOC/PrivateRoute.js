import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = (props) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return <div {...props} />;
  } else {
    return <Navigate to={"/signin"} />;
  }
};
export default PrivateRoute;
