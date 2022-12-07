import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../../store/todo";
import "./TodoList.scss";

const TodoList = observer(() => {
  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  return (
    <section className="todo-list">
      <ul className="todos">
        {todoStore.todos.map((todo: any) => (
          <li className="todo" key={todo.id}>
            <label className="todo__label">
              {todo.title}
              <input
                className="todo__status"
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoStore.completeTodo(todo.id)}
              />
            </label>
            <button
              className="todo__remove"
              onClick={() => todoStore.removeTodo(todo.id)}
              type="button"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default TodoList;
