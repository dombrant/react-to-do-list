import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

const App = () => {
  const [toDoItems, setToDoItems] = React.useState([
    { text: "Go to the store" },
    { text: "Workout" },
    { text: "Call Jenny" },
  ]);

  const deleteItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  };

  return (
    <div>
      <Header listLength={toDoItems.length} />
      <ToDoList
        toDoItems={toDoItems}
        setToDoItems={setToDoItems}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
