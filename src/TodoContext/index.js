import React  from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false)
    //   !!todo.completed es lo mismo que todo.completed === true

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (searchValue.length === 0) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      });
    }

    const toggleCompleteTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    };
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
    const addTodo = (text) => {
     
      const newTodos = [...todos];
      newTodos.push({
        completed:false,
        text
      });
      saveTodos(newTodos);
    };



    return (
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleCompleteTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo

    }}>
        {props.children}
    </TodoContext.Provider>
    )
}
export {TodoContext, TodoProvider};
