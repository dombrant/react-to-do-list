import React from "react";

const ToDoItem = ({ text }) => {
  return (
    <li className="to-do-item">
      <p> {text} </p>
      <button> X </button>
    </li>
  );
};

export default ToDoItem;
