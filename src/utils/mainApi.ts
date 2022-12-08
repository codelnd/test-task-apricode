import axios, { AxiosResponse } from "axios";
import { IAuthResponse } from "../models/types";

function register(
  email: string,
  password: string
): Promise<AxiosResponse<IAuthResponse>> {
  return axios
    .post("http://localhost:3000/register", {
      email,
      password,
    })
    .then((res: AxiosResponse) => res.data);
}

function login(
  email: string,
  password: string
): Promise<AxiosResponse<IAuthResponse>> {
  return axios
    .post("http://localhost:3000/login", {
      email,
      password,
    })
    .then((res: AxiosResponse) => res.data);
}

export { register, login };
