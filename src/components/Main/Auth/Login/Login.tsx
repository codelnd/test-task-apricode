import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Login = () => {
  return (
    <Auth
      title="Рады видеть!"
      name="login"
      buttonName="Войти"
      question="Ещё не зарегистрированы?"
      pathName="Регистрация"
      path="/signup"
    >
      <Input
        labelText="E-mail"
        type="email"
        name="email"
        minLength={4}
        maxLength={16}
        placeholder="Введите e-mail"
      />
      <ErrorMessage />
      <Input
        labelText="Пароль"
        type="password"
        name="password"
        minLength={4}
        maxLength={10}
        placeholder="Введите пароль"
      />
      <ErrorMessage />
    </Auth>
  );
};

export default Login;
