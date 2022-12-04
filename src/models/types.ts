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
