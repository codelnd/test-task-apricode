import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import TodoList from "../Main/TodoList/TodoList";
import Login from "../Main/Auth/Login/Login";
import Register from "../Main/Auth/Register/Register";
import Main from "../Main/Main";

function App() {
    const location = useLocation()

    return (
        <div className="page">
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<TodoList/>}/>
                    <Route path="/signin" element={<Login/>}/>
                    <Route path="/signup" element={<Register/>}/>
                </Routes>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
