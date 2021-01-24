import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoItems, deleteItem }) => {
  return (
    <ul>
      {toDoItems.map((item, index) => {
        return (
          <ToDoItem
            key={index}
            index={index}
            text={item.text}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
