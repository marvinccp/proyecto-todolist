import React from "react";
import "./TodoSearch.css";
import {TodoContext}  from '../TodoContext'


function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return [
    <form>
      <div className="search-container">
        <input
          className="search-text"
          placeholder="Buscar tarea"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </form>,
  ];
}
export { TodoSearch };
