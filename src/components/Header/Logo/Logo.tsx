import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <img className="logo" src="" alt="логотип"></img>
    </Link>
  );
};

export default Logo;
