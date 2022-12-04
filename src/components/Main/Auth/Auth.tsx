import React, {PropsWithChildren} from 'react';
import {Link} from "react-router-dom";
import {IAuthProps} from "../../../models/types";

const Auth = ({children, title, name, buttonName, question, path, pathName}: PropsWithChildren<IAuthProps>) => {
    return (
        <section className="auth">
            <h2 className="auth__title">{title}</h2>
            <form
                className={`auth__form auth__form_${name}`}
                name={name}
                id={name}
            >
                {children}
            </form>
            <button
                className={`auth__button auth__button_disabled`}
                type="submit"
                form={name}
            >
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
};

export default Auth;
