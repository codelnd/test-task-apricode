import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";

function App() {
    const location = useLocation()

    return (
        <div className="page">
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<TodoList/>}></Route>
                    <Route path="/signin" element={<Login/>}></Route>
                    <Route path="/signup" element={<Register/>}></Route>
                </Routes>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
