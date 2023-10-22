import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoArr: [],
};

export const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, dataFromComponent) => {
      state.toDoArr.push(dataFromComponent.payload);
    },
  },
});

export const { addToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
