import {makeAutoObservable} from "mobx";
import axios from "axios";

class TodoStore {
    todos = [];
    inputValue = "";
    todo = {
        id: '',
        title: "",
        completed: false
    }

    constructor() {
        makeAutoObservable(this);
    }

    fetchTodos = () => {
        axios.get("http://localhost:3000/todos").then((res) => {
            // @ts-ignore
            this.todos = [...this.todos, ...res.data];
        });
    };

    setInputValue = (title: any) => {
        this.inputValue = title;
    };

    setTodo = (title: any) => {
        this.todo = {...this.todo, title: title, completed: false}
    }

    addTodo = (obj:any) => {
        return (
            axios.post("http://localhost:3000/todos", obj)
                .then(res => console.log(res.data))
        )}

    removeTodo = (id: any) => {
        this.todos = this.todos.filter((todo: any) => todo.id !== id);
    };

    completeTodo = (id: any) => {
        // @ts-ignore
        this.todos = this.todos.map((todo: any) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
    };
}

export const todoStore = new TodoStore();
