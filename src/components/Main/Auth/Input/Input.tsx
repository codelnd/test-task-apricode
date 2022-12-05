import React from "react";
import { IInputProps } from "../../../../models/types";
import "./Input.scss";

const Input = ({
  labelText,
  type,
  name,
  minLength,
  maxLength,
  placeholder,
  onChange,
  value,
}: IInputProps) => {
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
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Input;
