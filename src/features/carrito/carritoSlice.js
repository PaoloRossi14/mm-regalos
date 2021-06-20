import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addItem, removeItem } = carritoSlice.actions;

export const selectCarrito = (state) => state.carrito.items;

export const getTotalCarrito = (items) =>
  items?.reduce((amount, item) => amount + item.price, 0);

export default carritoSlice.reducer;
