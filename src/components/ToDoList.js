import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";
import AddItem from "./AddItem";

const ToDoList = ({ toDoItems, deleteItem, addItem }) => {
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
      <AddItem addItem={addItem} tabIndex="0" />
    </ul>
  );
};

export default ToDoList;
