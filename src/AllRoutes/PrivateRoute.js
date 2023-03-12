import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userEmail = localStorage.getItem("loggedUser");

  return userEmail ? children : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
