import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../../store/user";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    userStore.setLoggedIn(false);
    userStore.currentUser = {};
    navigate("/signin");
  };

  return (
    <header>
      <Link to="/">Главная</Link>
      <Link to="/signup">Регистрация</Link>
      <Link to="/signin">Войти</Link>
      <Link onClick={handleLogout} to="/signin">
        Выйти
      </Link>
    </header>
  );
});

export default Header;
