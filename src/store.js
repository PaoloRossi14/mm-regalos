import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "features/carrito/carritoSlice";
import authReducer from "features/auth/authSlice";

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
    auth: authReducer,
  },
});
