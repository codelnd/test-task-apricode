import { makeAutoObservable } from "mobx";
import axios, { AxiosResponse } from "axios";
import { IAuthResponse } from "../models/types";

class UserStore {
  loggedIn = false;
  currentUser = {};

  constructor() {
    makeAutoObservable(this);
  }

  login = (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> => {
    return axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((res: AxiosResponse) => res.data);
  };

  register = (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> => {
    return axios
      .post("http://localhost:3000/register", {
        email,
        password,
      })
      .then((res: AxiosResponse) => res.data);
  };

  addUser = (user: any) => {
    this.currentUser = { ...user };
  };

  setLoggedIn = (boolean: boolean) => {
    this.loggedIn = boolean;
  };
}

export const userStore = new UserStore();
