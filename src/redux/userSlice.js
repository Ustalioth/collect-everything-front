import { createSlice } from '@reduxjs/toolkit';
import serviceApi from 'api/serviceApi';
import { login } from './authSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  }
});

export const userReducer = userSlice.reducer;

export const {
    setUser,
} = userSlice.actions;

export const registerCustomer = (customer) => (dispatch) => {
  return serviceApi.registerCustomer({...customer, role: "USER"}).then(
    ({status, data}) => {
      dispatch(setUser(data));
      dispatch(login(customer.email, customer.password));
    },
    error => dispatch(setUser(null))
  );
}

export const updateCustomer = (customer) => (dispatch) => {
  return serviceApi.updateCustomer({...customer, role: "USER"}).then(
    ({status, data}) => dispatch(setUser(data)),
    error => console.log(error) /*dispatch(setUser(null))*/
  );
}

export const setUserUsingEmail = (email) => (dispatch) => {
  return serviceApi.getUserByEmail(email).then(
    ({status, data}) => dispatch(setUser(data)),
    error => dispatch(setUser(null))
  );
}