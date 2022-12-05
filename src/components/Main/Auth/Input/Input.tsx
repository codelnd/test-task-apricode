import React from 'react';
import {IInputProps} from "../../../../models/types";
import './Input.scss'

const Input = ({labelText, type, name, minLength, maxLength, placeholder}: IInputProps<string, number>) => {
    return (
        <label>
            <p className={`auth__label`}>{labelText}</p>
            <input
                type={type}
                name={name}
                className={`auth__input`}
                required
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                value= ''
            />
        </label>
    );
};

export default Input;
