// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: [
    {
      id: 1,
      title: "이것은 제목",
      content: "이것은 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "이것은 제목22",
      content: "이것은 내용22",
      isDone: true,
    },
  ],
  reducers: {
    addTodolist: (state, action) => {
      state.push(action.payload);
    },
    toggleTodolist: (state, action) => {
      const filteredTodolist = state.find((item) => item.id === action.payload);
      if (filteredTodolist) {
        filteredTodolist.isDone = !filteredTodolist.isDone;
      }
    },
    deleteTodolist: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodolist, toggleTodolist, deleteTodolist } =
  todolistSlice.actions;

export default todolistSlice.reducer;
