import { makeAutoObservable } from "mobx";
import axios, { AxiosResponse } from "axios";
import { ITodo } from "../models/types";

class TodoStore {
  todos = [];
  inputValue = "";
  todo = {
    id: "",
    title: "",
    completed: false,
  };
  popupIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAllTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((res: AxiosResponse<ITodo[]>) => {
        // @ts-ignore
        this.todos = [...this.todos, ...res.data];
      });
  };

  fetchCompletedTodos = () => {
    axios
      .get("http://localhost:3000/todos?completed=true")
      .then((res: AxiosResponse<ITodo[]>) => {
        // @ts-ignore
        this.todos = [...this.todos, ...res.data];
      });
  };

  fetchUncompletedTodos = () => {
    axios
      .get("http://localhost:3000/todos?completed=false")
      .then((res: AxiosResponse<ITodo[]>) => {
        // @ts-ignore
        this.todos = [...this.todos, ...res.data];
      });
  };

  setInputValue = (title: string) => {
    this.inputValue = title;
  };

  setTodo = (title: string) => {
    this.todo = { ...this.todo, title: title, completed: false };
  };

  togglePopup = () => {
    this.popupIsOpen = !this.popupIsOpen;
  };

  setPopupOpened = (boolean: boolean) => {
    this.popupIsOpen = boolean;
  };

  addTodo = (todo: ITodo) => {
    return (
      axios
        .post("http://localhost:3000/todos", todo)
        // @ts-ignore
        .then((res) => (this.todos = [...this.todos, res.data]))
    );
  };

  removeTodo = (todo: ITodo) => {
    return axios.delete(`http://localhost:3000/todos/${todo.id}`).then(() => {
      this.todos = this.todos.filter((el: ITodo) => el.id !== todo.id);
    });
  };

  completeTodo = (todo: ITodo) => {
    return axios
      .put(`http://localhost:3000/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      })
      .then((res) => {
        // @ts-ignore
        this.todos = this.todos.map((el: ITodo) => {
          if (el.id !== todo.id) {
            return el;
          } else {
            return res.data;
          }
        });
      });
  };

  handleAllTodos = () => {
    this.todos = [];
    this.fetchAllTodos();
  };

  handleCompleted = () => {
    this.todos = [];
    this.fetchCompletedTodos();
  };

  handleUncompleted = () => {
    this.todos = [];
    this.fetchUncompletedTodos();
  };
}

export const todoStore = new TodoStore();
