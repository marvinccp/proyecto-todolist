import React from "react";
import './todoList.css'

function TodoList(props) {
  return (
    <section className='todolist-container'>
      <ul className='todolist'>{props.children}</ul>
    </section>
  );
}
export { TodoList };
