import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import TodoList from "../Main/TodoList/TodoList";
import Login from "../Main/Auth/Login/Login";
import Register from "../Main/Auth/Register/Register";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { userStore } from "../../store/user";

function App() {
  useEffect(() => {
    userStore.addUser(
      JSON.parse(localStorage.getItem("currentUser") as string)
    );
  }, []);

  return (
    <div className="page">
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <TodoList />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
