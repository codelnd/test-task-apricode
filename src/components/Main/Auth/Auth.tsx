import React, { PropsWithChildren, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IAuthProps } from "../../../models/types";
import "./Auth.scss";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { userStore } from "../../../store/user";

const Auth = observer(
  ({
    children,
    title,
    name,
    buttonName,
    question,
    path,
    pathName,
    registerData,
    loginData,
  }: PropsWithChildren<IAuthProps>) => {
    console.log(userStore);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      checkAuth();
    }, []);

    function register(email: any, password: any) {
      return axios
        .post("http://localhost:3000/register", {
          email,
          password,
        })
        .then((res) => res.data);
    }

    function login(email: any, password: any) {
      return axios
        .post("http://localhost:3000/login", {
          email,
          password,
        })
        .then((res) => res.data);
    }

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

    const handleSubmitLogin = (e: React.FormEvent) => {
      e.preventDefault();
      handleLogin(loginData);
    };

    const handleSubmitRegister = (e: React.FormEvent) => {
      e.preventDefault();
      handleRegister(registerData);
    };

    return (
      <section className="auth">
        <h2 className="auth__title">{title}</h2>
        <form
          className={`auth__form auth__form_${name}`}
          name={name}
          id={name}
          autoComplete="off"
          onSubmit={name === "login" ? handleSubmitLogin : handleSubmitRegister}
        >
          {children}
        </form>
        <button className={`auth__button`} type="submit" form={name}>
          {buttonName}
        </button>
        <div className="redirect">
          <p className="redirect__question">{question}</p>
          <Link className="redirect__link" to={path}>
            {pathName}
          </Link>
        </div>
      </section>
    );
  }
);

export default Auth;
