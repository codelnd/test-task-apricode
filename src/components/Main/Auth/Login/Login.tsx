import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useInput from "../../../../hooks/useInput";

const Login = () => {
  const email = useInput("");
  const password = useInput("");

  const loginData = {
    // @ts-ignore
    [email.input.name]: email.value,
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
      loginData={loginData}
    >
      <Input
        labelText="E-mail"
        type="email"
        name="email"
        placeholder="Введите e-mail"
        onChange={(e: React.ChangeEvent) => email.onChange(e)}
        value={email.value}
      />
      <ErrorMessage />
      <Input
        labelText="Пароль"
        type="password"
        name="password"
        placeholder="Введите пароль"
        onChange={(e: React.ChangeEvent) => password.onChange(e)}
        value={password.value}
      />
      <ErrorMessage />
    </Auth>
  );
};

export default Login;
