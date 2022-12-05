import React from "react";
import Auth from "../Auth";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useInput from "../../../../hooks/useInput";

const Register = () => {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");

  const registerData = {
    // @ts-ignore
    [username.input.name]: username.value,
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
    >
      <Input
        labelText="Имя"
        type="text"
        name="username"
        minLength={2}
        maxLength={30}
        placeholder="Как Вас зовут?"
        onChange={(e: React.ChangeEvent) => username.onChange(e)}
        value={username.value}
      />
      <ErrorMessage />
      <Input
        labelText="E-mail"
        type="email"
        name="email"
        minLength={4}
        maxLength={16}
        placeholder="Введите e-mail"
        onChange={(e: React.ChangeEvent) => email.onChange(e)}
        value={email.value}
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
