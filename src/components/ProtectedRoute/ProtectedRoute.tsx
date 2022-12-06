import React from "react";
import { Navigate } from "react-router-dom";
import { userStore } from "../../store/user";

const ProtectedRoute = ({ children }: any) => {
  return userStore.loggedIn ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
