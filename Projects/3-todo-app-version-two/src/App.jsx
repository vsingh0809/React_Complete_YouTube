import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  const [todoItems, settodoItems] = useState();
  const handleNewItems = (itemName, itemDueDate) => {
    console.log("add new item:${itemName} date: ${itemDueDate}");
    const newtodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newtodoItems);
  };

  return (
    <center className="todo-container">
      <AppName onNewItem={handleNewItems} />
      <AddTodo />
      <TodoItems todoItems={todoItem}></TodoItems>
    </center>
  );
}

export default App;
