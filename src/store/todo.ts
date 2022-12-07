import { makeAutoObservable } from "mobx";
import axios from "axios";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: any) => {
    // @ts-ignore
    this.todos.push(todo);
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
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((json) => {
        // @ts-ignore
        this.todos = [...this.todos, ...json];
      });
  };
}

export const todoStore = new TodoStore();
