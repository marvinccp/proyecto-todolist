import React from "react";
import './TodoCounter.css'
import {TodoContext} from '../TodoContext'


function TodoCounter() {

  const { totalTodos, completedTodos} = React.useContext(TodoContext)
  return (
    <h2 className="todocounter">
      Tareas pendientes  <span className="todo-red">{totalTodos - completedTodos} </span>
    </h2>
  );
}
export {TodoCounter};
