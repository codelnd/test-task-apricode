import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../../store/todo";
import "./TodoList.scss";
import { useSearchParams } from "react-router-dom";

const TodoList = observer(() => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const todoQuery = searchParams.get("title") || "";
  // console.log(todoQuery);

  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoStore.inputValue) {
      return;
    } else {
      todoStore.setTodo(todoStore.inputValue);
      todoStore.addTodo(todoStore.todo);
    }
    todoStore.setInputValue("");
  };

  // const handleSearchSubmit = (e: any) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const query = form.search.value;
  //
  //   setSearchParams({ title: query });
  // };

  return (
    <section className="todo-list">
      {/*<form autoComplete="off" onSubmit={handleSearchSubmit}>*/}
      {/*  <input type="submit" name="Search" />*/}
      {/*  <input type="search" name="search" />*/}
      {/*</form>*/}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Добавьте задачу"
          value={todoStore.inputValue}
          onChange={(e) => todoStore.setInputValue(e.target.value)}
        />
        <button>Добавить</button>
      </form>
      <ul className="todos">
        {todoStore.todos
          // .filter((el: any) => el.title.includes(todoQuery))
          .map((todo: any, i) => {
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
