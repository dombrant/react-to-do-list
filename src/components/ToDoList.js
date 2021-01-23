import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoItems }) => {
  return (
    <ul>
      {toDoItems.map((item, index) => {
        return <ToDoItem key={index} text={item.text} />;
      })}
    </ul>
  );
};

export default ToDoList;
