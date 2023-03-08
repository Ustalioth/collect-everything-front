import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
      store: {},
      categories: {},
      products: {},
      settings: {}
    },
    reducers: {
      setStore: (state, action) => { state.store = action.payload },
      setCategories: (state, action) => { state.categories = action.payload },
      setProducts: (state, action) => { state.products = action.payload },
      setCustomizations: (state, action) => { state.settings = action.payload },
    },
  });
  
  export const shopReducer = shopSlice.reducer;
  
  export const {
    setStore,
    setCategories,
    setProducts,
    setCustomizations,
  } = shopSlice.actions;
  