import { makeAutoObservable } from "mobx";
import axios from "axios";

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
    axios.get("http://localhost:3000/todos").then((res) => {
      // @ts-ignore
      this.todos = [...this.todos, ...res.data];
    });
  };

  fetchCompletedTodos = () => {
    axios.get("http://localhost:3000/todos?completed=true").then((res) => {
      // @ts-ignore
      this.todos = [...this.todos, ...res.data];
    });
  };

  fetchUncompletedTodos = () => {
    axios.get("http://localhost:3000/todos?completed=false").then((res) => {
      // @ts-ignore
      this.todos = [...this.todos, ...res.data];
    });
  };

  setInputValue = (title: any) => {
    this.inputValue = title;
  };

  setTodo = (title: any) => {
    this.todo = { ...this.todo, title: title, completed: false };
  };

  togglePopup = () => {
    this.popupIsOpen = !this.popupIsOpen;
  };

  setPopup = (boolean: boolean) => {
    this.popupIsOpen = boolean;
  };

  addTodo = (obj: any) => {
    return (
      axios
        .post("http://localhost:3000/todos", obj)
        // @ts-ignore
        .then((res) => (this.todos = [...this.todos, res.data]))
    );
  };

  removeTodo = (todo: any) => {
    return axios.delete(`http://localhost:3000/todos/${todo.id}`).then(() => {
      this.todos = this.todos.filter((el: any) => el.id !== todo.id);
    });
  };

  completeTodo = (todo: any) => {
    return axios
      .put(`http://localhost:3000/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      })
      .then((res) => {
        // @ts-ignore
        this.todos = this.todos.map((el: any) => {
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
