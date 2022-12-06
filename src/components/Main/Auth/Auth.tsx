import React, { PropsWithChildren } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const handleSubmitLogin = (e: React.FormEvent) => {
      e.preventDefault();
      axios
        .post("http://localhost:3000/login", {
          email: loginData.email,
          password: loginData.password,
        })
        .then((res) => {
          console.log(res.data.user);
          navigate("/");
        });
    };

    const handleSubmitRegister = (e: React.FormEvent) => {
      e.preventDefault();
      axios
        .post("http://localhost:3000/register", {
          email: registerData.email,
          password: registerData.password,
          todos: [],
        })
        .then((res) => {
          userStore.addUser(res.data.user);
          navigate("/");
        });
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
