import { useEffect } from "react";
import { userStore } from "../store/user";
import { useLocation, useNavigate } from "react-router-dom";
import { todoStore } from "../store/todo";
import { AxiosResponse } from "axios";
import { IAuthRequest, IAuthResponse } from "../models/types";

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

  function handleLogin({ email, password }: IAuthRequest) {
    userStore
      .login(email, password)
      .then((res: AxiosResponse<IAuthResponse>) => {
        handleData(res);
      });
  }

  function handleRegister({ email, password }: IAuthRequest) {
    userStore
      .register(email, password)
      .then((res: AxiosResponse<IAuthResponse>) => {
        handleData(res);
      });
  }

  function handleLogout() {
    localStorage.clear();
    userStore.setLoggedIn(false);
    userStore.currentUser = {};
    todoStore.todos = [];
    navigate("/signin");
  }

  return {
    handleLogin,
    handleRegister,
    handleLogout,
  };
}

export default useAuth;
