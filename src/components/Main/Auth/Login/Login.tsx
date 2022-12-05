import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useInput from "../../../../hooks/useInput";

const Login = () => {
  const login = useInput("");
  const password = useInput("");

  const loginData = {
    // @ts-ignore
    [login.input.name]: login.value,
    // @ts-ignore
    [password.input.name]: password.value,
  };

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

export default Login;
