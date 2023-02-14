import React from "react";
import "./App.css";
import Button from "./Button";
import Todo from "./Todo";

function App() {
  const todos = [
    { _id: 1, title: "wash dishes", isCompleted: true },
    { _id: 2, title: "wash car", isCompleted: false },
    { _id: 3, title: "buy milk", isCompleted: true },
    { _id: 4, title: "code", isCompleted: false },
  ];
  return (
    <div className="App">
      <Button label="Click"></Button>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
