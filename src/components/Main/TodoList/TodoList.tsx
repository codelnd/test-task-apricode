import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../../store/todo";
import "./TodoList.scss";
import { ITodo } from "../../../models/types";

const TodoList = observer(() => {
  useEffect(() => {
    todoStore.fetchAllTodos();
  }, []);

  return (
    <section className="todo-list">
      <div className="buttons__wrp">
        <button
          onClick={() => todoStore.togglePopup()}
          className="button__todo"
        >
          Добавить задачу
        </button>
        <button
          className="button__todo"
          type="button"
          onClick={todoStore.handleAllTodos}
        >
          Все
        </button>
        <button
          className="button__todo"
          type="button"
          onClick={todoStore.handleCompleted}
        >
          Завершенные
        </button>
        <button
          className="button__todo"
          type="button"
          onClick={todoStore.handleUncompleted}
        >
          Незавершенные
        </button>
      </div>
      <ul className="todos">
        {todoStore.todos.map((todo: ITodo, i) => {
          const titleClasses = ["todo__label"];
          if (todo.completed) {
            titleClasses.push("todo__label_completed");
          }

          return (
            <li className="todo" key={i}>
              <label className={titleClasses.join(" ")}>
                {todo.title}
                <input
                  className="todo__status"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => todoStore.completeTodo(todo)}
                />
              </label>
              <button
                className="todo__remove"
                onClick={() => todoStore.removeTodo(todo)}
                type="button"
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
});

export default TodoList;
