import React, { PropsWithChildren } from "react";

export interface IAuthProps {
  children: PropsWithChildren;
  title: string;
  name: string;
  buttonName: string;
  question: string;
  path: string;
  pathName: string;
}

export interface IInputProps {
  labelText: string;
  type: string;
  name: string;
  placeholder: string;
  onChange?: any;
  value?: any;
}
