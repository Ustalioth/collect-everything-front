import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { shopReducer } from "./shopSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    shop: shopReducer,
  }
})

