import React, {PropsWithChildren} from "react";

export interface IAuthProps {
    children: PropsWithChildren
    title: string
    name: string
    buttonName: string
    question: string
    path: string
    pathName: string
}

export interface IInputProps<T, N> {
    labelText: T
    type: T
    name: T
    minLength: N
    maxLength: N
    placeholder: T
}
