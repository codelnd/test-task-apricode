import React from 'react';
import Auth from "../Auth";

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
        </Auth>
    );
};

export default Login;
