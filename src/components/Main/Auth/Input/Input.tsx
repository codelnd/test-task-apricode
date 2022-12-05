import React from "react";
import { IInputProps } from "../../../../models/types";
import "./Input.scss";

const Input = ({
  labelText,
  type,
  name,
  placeholder,
  onChange,
  value,
}: IInputProps) => {
  return (
    <label>
      <p className={`auth__label`}>{labelText}</p>
      <input
        required
        type={type}
        name={name}
        className={`auth__input`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Input;
