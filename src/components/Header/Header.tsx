import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Главная</Link>
      <Link to="/signup">Регистрация</Link>
      <Link to="/signin">Войти</Link>
    </header>
  );
};

export default Header;
