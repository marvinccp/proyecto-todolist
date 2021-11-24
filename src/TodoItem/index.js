import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`icon-check-item Icon Icon-check ${
          props.completed && "Icon-check--active .icon-check-item:active"
        }`}
        onClick={props.onComplete}
      ></span>

      <p
        className={`TodoItem-p ${props.completed && "Todo-item-check-active "}`}
      >
        {props.text}
      </p>

      <span
        className="icon-trash-item Icon  Icon-delete"
        onClick={props.onDelete}
      ></span>
    </li>
  );
}
export { TodoItem };
