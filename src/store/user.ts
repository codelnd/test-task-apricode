import { makeAutoObservable } from "mobx";

class UserStore {
  currentUser = {};

  addUser = (user: any) => {
    this.currentUser = { ...user };
  };
}

export const userStore = new UserStore();
