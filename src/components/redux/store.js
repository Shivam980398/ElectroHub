import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.js";

// ✅ Load cart from localStorage if present
const persistedCart = JSON.parse(localStorage.getItem("cart")) || [];

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
  preloadedState: {
    cart: persistedCart,
  },
});

// ✅ Save cart to localStorage whenever it changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
});
