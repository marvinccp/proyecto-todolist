import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
import "./App.css";

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: false },
//   { text: "Tomar el curso intro de React", completed: false },
//   { text: "Comer hamburguesa", completed: false },
//   { text: "Jugar con Isabella", completed: false },
//   { text: "Cenar con mi esposa", completed: false },
// ];

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
