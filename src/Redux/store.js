import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import toDoSlice from "./Slices/toDoSlice";
export const store = configureStore({
  reducer: {
    cartSlice,
    toDoSlice,
  },
});
