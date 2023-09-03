import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div className="container">
      <h1>Lista de Tarefas com Redux</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
