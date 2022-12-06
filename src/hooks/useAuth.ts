import { useEffect } from "react";
import { userStore } from "../store/user";
import { useLocation, useNavigate } from "react-router-dom";
import { login, register } from "../utils/mainApi";

function useAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  function checkPath() {
    if (location.pathname === "/signup" || location.pathname === "/signin") {
      navigate("/");
    } else {
      navigate(location.pathname);
    }
  }

  function checkAuth() {
    if (localStorage.getItem("currentUser")) {
      userStore.setLoggedIn(true);
      checkPath();
    }
  }

  function handleData(res: any) {
    localStorage.setItem("currentUser", JSON.stringify(res.user));
    checkAuth();
    userStore.addUser(res.user);
    userStore.setLoggedIn(true);
    navigate("/");
  }

  function handleLogin({ email, password }: any) {
    login(email, password).then((res) => {
      handleData(res);
    });
  }

  function handleRegister({ email, password }: any) {
    register(email, password).then((res) => {
      handleData(res);
    });
  }

  return {
    handleLogin,
    handleRegister,
  };
}

export default useAuth;
