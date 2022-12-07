import { makeAutoObservable } from "mobx";
import axios from "axios";

class TodoStore {
  todos = [];
  inputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodoValue = (title: any) => {
    this.inputValue = title;
  };

  removeTodo = (id: any) => {
    this.todos = this.todos.filter((todo: any) => todo.id !== id);
  };

  completeTodo = (id: any) => {
    // @ts-ignore
    this.todos = this.todos.map((todo: any) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  fetchTodos = () => {
    axios("http://localhost:3000/todos").then((res) => {
      // @ts-ignore
      this.todos = [...this.todos, ...res.data];
    });
  };
}

export const todoStore = new TodoStore();
