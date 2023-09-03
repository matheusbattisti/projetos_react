import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    filter: "all", // 'all', 'completed', 'incomplete'
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    filterTodos: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, filterTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
