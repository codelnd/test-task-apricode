// @ts-ignore
import closeBtn from "../../images/close.svg";
import "./Popup.scss";
import React from "react";
import { todoStore } from "../../store/todo";
import { observer } from "mobx-react-lite";

const Popup = observer(() => {
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoStore.inputValue) {
      return;
    } else {
      todoStore.setTodo(todoStore.inputValue);
      todoStore.addTodo(todoStore.todo);
    }
    todoStore.setInputValue("");
    todoStore.setPopupOpened(false);
  };

  return (
    <section
      onMouseDown={() => todoStore.setPopupOpened(false)}
      className={`popup ${todoStore.popupIsOpen ? "popup_opened" : ""}`}
    >
      <div
        className="popup__container"
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
          e.stopPropagation()
        }
      >
        <button className="button popup__close" type="button">
          <img
            className="popup__close-img"
            src={closeBtn}
            alt="закрыть попап"
            onMouseDown={() => todoStore.setPopupOpened(false)}
          />
        </button>
        <h2 className="popup__title">Новая задача</h2>
        <form className="popup__form" onSubmit={handleAddTodo}>
          <input
            className="popup__input popup__input_type_title"
            type="text"
            placeholder="Добавьте задачу"
            value={todoStore.inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              todoStore.setInputValue(e.target.value)
            }
          />
          <button
            className={`popup__button ${
              !todoStore.inputValue ? "popup__button_disabled" : ""
            }`}
            type="submit"
            disabled={!todoStore.inputValue}
          >
            Добавить
          </button>
        </form>
      </div>
    </section>
  );
});

export default Popup;
