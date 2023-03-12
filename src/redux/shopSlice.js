import { createSlice } from '@reduxjs/toolkit';
import serviceApi from "api/serviceApi";


const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    store: {},
    categories: [],
    products: [],
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
  getProductsByCategory,
} = shopSlice.actions;

export const selectShop = state => state.shop;
export const selectStore = state => state.shop.store;
export const selectCategories = state => state.shop.categories;
export const selectProducts = state => state.shop.products;
export const selectCustomizations = state => state.shop.settings;

export const fetchStoreByName = (name) => (dispatch) => {
  return serviceApi.getStoreByName(name).then(
    response => {
      dispatch(setStore(response.data));
      dispatch(fetchStoreCategories(response.data.storeId));
      dispatch(fetchStoreProducts(response.data.storeId));
      dispatch(fetchStoreCutomizations(response.data.storeId));
    },
    error => dispatch(setStore({}))
  );
}

export const fetchStoreCategories = (storeId) => async (dispatch) => {
  return serviceApi.getStoreCategories(storeId).then(
    response => dispatch(setCategories(response.data)),
    error => dispatch(setCategories([]))
  );
}

export const fetchStoreProducts = (storeId) => async (dispatch) => {
  return serviceApi.getStoreProducts(storeId).then(
    response => dispatch(setProducts(response.data)),
    error => dispatch(setProducts([]))
  );
}

export const fetchStoreCutomizations = (storeId) => async (dispatch) => {
  return serviceApi.getStoreCustomizations(storeId).then(
    response => dispatch(setCustomizations(response.data)),
    error => dispatch(setCustomizations({}))
  );
}
