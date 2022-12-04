import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
    const location = useLocation()

    return (
        <div className="page">

            <Routes>
                <Header/>
                <Route path="/" element={<TodoList/>}></Route>
                <Route path="/signin" element={<Login/>}></Route>
                <Route path="/signup" element={<Register/>}></Route>
                <Footer/>
            </Routes>

        </div>
    );
}

export default App;
