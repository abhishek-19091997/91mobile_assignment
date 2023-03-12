import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import SignIn from "../Signin";
import SignUp from "../SignUp";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
