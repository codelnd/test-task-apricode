import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useInput from "../../../../hooks/useInput";

const Register = () => {
  const email = useInput("");
  const password = useInput("");

  const registerData = {
    // @ts-ignore
    [email.input.name]: email.value,
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
      registerData={registerData}
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

export default Register;
