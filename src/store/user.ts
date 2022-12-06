class UserStore {
  loggedIn = false;
  currentUser = {};

  addUser = (user: any) => {
    this.currentUser = { ...user };
  };

  setLoggedIn = (boolean: boolean) => {
    this.loggedIn = boolean;
  };
}

export const userStore = new UserStore();
