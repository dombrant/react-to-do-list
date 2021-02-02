import React from "react";

const ToDoItem = ({ index, text, deleteItem }) => {
  return (
    <li className="to-do-item">
      <p> {text} </p>
      <button onClick={() => deleteItem(index)} tabIndex="0">
        {" "}
        X{" "}
      </button>
    </li>
  );
};

export default ToDoItem;
