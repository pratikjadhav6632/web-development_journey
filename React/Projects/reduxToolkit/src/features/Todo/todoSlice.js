import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(newTodo)
    },
    removeTodo: (state,action) => {
        state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
    },
    updateTodo:(state,action)=>{
        state.todos=state.todos.map((todo)=>todo.id === action.payload.id ?{...todo,text:action.payload.text }: todo.text)
    }
  },
});

export const {addTodo,removeTodo,updateTodo} =todoSlice.actions

export default todoSlice.reducer