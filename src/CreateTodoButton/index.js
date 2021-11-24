import React from "react";
import './createButton.css'

function CreateTodoButton(props) {
  let button = document.querySelector("#button-create-task");
  const onclickButton = ()=>{
    button.classList.add("CreateTodoButton-of")
    props.setOpenModal(prevState =>!prevState);
    console.log((prevState) => !prevState);
  }
  
  return (
    <button
      id='button-create-task'
      className='CreateTodoButton'
      onClick={onclickButton}
    >
      Crear tarea
      <span className="sign-plus"></span>
    </button>
  );
}
export { CreateTodoButton };
