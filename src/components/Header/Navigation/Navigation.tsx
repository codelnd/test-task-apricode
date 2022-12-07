import { Link, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { observer } from "mobx-react-lite";
import { userStore } from "../../../store/user";

const Navigation = observer(() => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    userStore.setLoggedIn(false);
    userStore.currentUser = {};
    navigate("/signin");
  };

  return userStore.loggedIn ? (
    <nav className="nav nav__outside">
      <Link
        onClick={handleLogout}
        to="/signin"
        className="nav__link nav__link_type_login"
      >
        Выход
      </Link>
    </nav>
  ) : (
    <nav className="nav nav__outside">
      <Link to="/signup" className="nav__link nav__link_type_register">
        Регистрация
      </Link>
      <Link to="/signin" className="nav__link nav__link_type_login">
        Войти
      </Link>
    </nav>
  );
});

export default Navigation;
