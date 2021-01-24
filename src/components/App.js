import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

const App = () => {
  const [toDoItems, setToDoItems] = React.useState([
    { text: "Go to the store" },
    { text: "Workout" },
    { text: "Call Jenny" },
  ]);

  return (
    <div>
      <Header listLength={toDoItems.length} />
      <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} />
    </div>
  );
};

export default App;
