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

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = () => {
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

  setInputValue = (title: any) => {
    this.inputValue = title;
  };

  setTodo = (title: any) => {
    this.todo = { ...this.todo, title: title, completed: false };
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
}

export const todoStore = new TodoStore();
