import { makeAutoObservable } from "mobx";

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
    this.todos.filter((todo: any) => todo.id !== id);
  };

  completeTodo = (id: any) => {
    this.todos.map((todo: any) =>
      todo.id === id ? { complete: !todo.complete } : todo
    );
  };
}

export const todoStore = new TodoStore();
