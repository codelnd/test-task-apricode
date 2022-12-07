import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../../../images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <img className="logo" src={logo} alt="логотип"></img>
    </Link>
  );
};

export default Logo;
