import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useInput from "../../../../hooks/useInput";

const Register = () => {
  const login = useInput("");
  const password = useInput("");

  const registerData = {
    // @ts-ignore
    [login.input.name]: login.value,
    // @ts-ignore
    [password.input.name]: password.value,
  };

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
        labelText="Логин"
        type="text"
        name="login"
        minLength={2}
        maxLength={30}
        placeholder="Введите логин"
        onChange={(e: React.ChangeEvent) => login.onChange(e)}
        value={login.value}
      />
      <ErrorMessage />
      <Input
        labelText="Пароль"
        type="password"
        name="password"
        minLength={4}
        maxLength={10}
        placeholder="Введите пароль"
        onChange={(e: React.ChangeEvent) => password.onChange(e)}
        value={password.value}
      />
      <ErrorMessage />
    </Auth>
  );
};

export default Register;
