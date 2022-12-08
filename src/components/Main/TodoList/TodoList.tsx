import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../../store/todo";
import "./TodoList.scss";

const TodoList = observer(() => {
  useEffect(() => {
    todoStore.fetchAllTodos();
  }, []);

  return (
    <section className="todo-list">
      {/*<button type="button" onClick={todoStore.handleAllTodos}>*/}
      {/*  Все*/}
      {/*</button>*/}
      {/*<button type="button" onClick={todoStore.handleCompleted}>*/}
      {/*  Завершенные*/}
      {/*</button>*/}
      {/*<button type="button" onClick={todoStore.handleUncompleted}>*/}
      {/*  Незавершенные*/}
      {/*</button>*/}
      <div className="buttons__wrp">
        <button
          onClick={() => todoStore.togglePopup()}
          className="button__todo"
        >
          Добавить задачу
        </button>
      </div>
      <ul className="todos">
        {todoStore.todos.map((todo: any, i) => {
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
