import React from 'react';
import Auth from "../Auth";

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
        </Auth>
    );
};

export default Register;
