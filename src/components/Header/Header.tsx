import React from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
