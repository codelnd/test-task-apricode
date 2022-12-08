import React, { PropsWithChildren } from "react";

export interface IAuthProps {
  children: PropsWithChildren;
  title: string;
  name: string;
  buttonName: string;
  question: string;
  path: string;
  pathName: string;
  registerData?: any;
  loginData?: any;
}

export interface IInputProps {
  labelText: string;
  type: string;
  name: string;
  placeholder: string;
  onChange?: any;
  value?: any;
}

export interface IUser {
  email: string;
  id: number;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
