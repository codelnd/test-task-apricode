import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";

const Register = () => {
  return (
    <Auth
      title="Добро пожаловать!"
      name="register"
      buttonName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      pathName="Войти"
      path="/signin"
    >
      <Input
        labelText="Имя"
        type="text"
        name="username"
        minLength={2}
        maxLength={30}
        placeholder="Как Вас зовут?"
      />
      <Input
        labelText="E-mail"
        type="email"
        name="email"
        minLength={4}
        maxLength={16}
        placeholder="Введите e-mail"
      />
      <Input
        labelText="Пароль"
        type="password"
        name="password"
        minLength={4}
        maxLength={10}
        placeholder="Введите пароль"
      />
    </Auth>
  );
};

export default Register;
