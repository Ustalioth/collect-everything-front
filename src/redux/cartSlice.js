import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    clearCart: (state, action) => state = [],
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.productId === action.payload.productId);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.find((product) => product.productId === action.payload);
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.productId === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.filter((item) => item.productId !== action.payload);
      return removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
