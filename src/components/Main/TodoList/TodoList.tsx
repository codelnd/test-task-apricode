import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../../store/todo";

const TodoList = observer(() => {
  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  return (
    <ul>
      {todoStore.todos.map((todo: any) => (
        <li className="todo__item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoStore.completeTodo(todo.id)}
          />
          <label>{todo.title}</label>
          <button onClick={() => todoStore.removeTodo(todo.id)} type="button">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
