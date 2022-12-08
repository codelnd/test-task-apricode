import React from "react";
import { Navigate } from "react-router-dom";
import { userStore } from "../../store/user";
import { IProtectedRouteProps } from "../../models/types";

const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  return userStore.loggedIn ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
