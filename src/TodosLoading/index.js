import React from "react";
import "./TodosLoading.css";

function TodosLoading(props) {
  return (
    <div className="loading-container">
      <span className="loadingTodo-completeIcon"></span>
      <p className="loadingTodo-text"></p>
      <span className="loadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };
