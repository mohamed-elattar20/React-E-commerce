import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCounter: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCounter += 1;
    },
    decrement: (state) => {
      if (state.cartCounter > 0) {
        state.cartCounter -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
