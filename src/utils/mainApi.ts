import axios from "axios";

function register(email: any, password: any) {
  return axios
    .post("http://localhost:3000/register", {
      email,
      password,
    })
    .then((res) => res.data);
}

function login(email: any, password: any) {
  return axios
    .post("http://localhost:3000/login", {
      email,
      password,
    })
    .then((res) => res.data);
}

export { register, login };
