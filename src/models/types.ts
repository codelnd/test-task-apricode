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

export interface IProtectedRouteProps {
  children: any;
}

export interface IInputProps {
  labelText: string;
  type: string;
  name: string;
  placeholder: string;
  onChange?: any;
  value?: string;
}

export interface IUser {
  email: string;
  id: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IAuthRequest {
  email: string;
  password: string;
}

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}
