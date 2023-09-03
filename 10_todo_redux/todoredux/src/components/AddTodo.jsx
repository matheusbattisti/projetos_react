import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTodo;
