import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  let button = document.querySelector("#button-create-task");
  const onCancel = () => {
    button.classList.remove("CreateTodoButton-of");
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    button.classList.remove("CreateTodoButton-of");

    if (newTodoValue === "") {
      alert("Debes escribir una tarea");
      button.classList.add("CreateTodoButton-of");
    } else {
      addTodo(newTodoValue);
      setOpenModal(false);
      button.classList.remove("CreateTodoButton-of");
    }
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      {/* <label>Nueva tarea</label>, */}
      <textarea
        onChange={onChange}
        textarea={newTodoValue}
        placeholder="¿Qué tienes por hacer?"
        className="new-task-textarea"
      />
      <div className='buttons-container'>
        <button className="form-button-cancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="form-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
