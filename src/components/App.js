import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

const App = () => {
  const [toDoItems, setToDoItems] = useState([]);

  // Run this only once, hence the second argument of []
  useEffect(() => {
    // Add the placeholder items if there are none in localStorage
    if (!localStorage.getItem("To Do Items")) {
      localStorage.setItem(
        "To Do Items",
        JSON.stringify([
          { text: "Go to the store" },
          { text: "Workout" },
          { text: "Call Jenny" },
        ])
      );
    }
    // Populate the to do list, whether it be with the placeholder items above or the existing ones in localStorage
    setToDoItems(JSON.parse(localStorage.getItem("To Do Items")));
  }, []);

  // Run this every time toDoItems changes
  useEffect(() => {
    // Add the placeholder items if there are none in localStorage
    localStorage.setItem("To Do Items", JSON.stringify(toDoItems));
  }, [toDoItems]);

  const deleteItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  };

  const addItem = (text) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.push({ text });
    setToDoItems(newToDoItems);
  };

  return (
    <div>
      <Header listLength={toDoItems.length} />
      <ToDoList
        toDoItems={toDoItems}
        setToDoItems={setToDoItems}
        deleteItem={deleteItem}
        addItem={addItem}
      />
    </div>
  );
};

export default App;
