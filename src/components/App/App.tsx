import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="page">
            <Header/>
            <div>Content</div>
            <Footer/>
        </div>
    );
}

export default App;
