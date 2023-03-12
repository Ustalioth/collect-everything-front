import { createSlice } from '@reduxjs/toolkit';
import serviceApi from 'api/serviceApi';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => { state = action.payload },
  }
});

export const userReducer = userSlice.reducer;

export const {
    setUser,
} = userSlice.actions;

export const registerCustomer = (customer) => (dispatch) => {
  return serviceApi.registerCustomer({...customer, role: "USER"}).then(
    response => dispatch(setUser(response.data)),
    error => dispatch(setUser(null))
  );
}

export const updateCustomer = (customer) => (dispatch) => {
  return serviceApi.updateCustomer({...customer, role: "USER"}).then(
    response => dispatch(setUser(response.data)),
    error => dispatch(setUser(null))
  );
}
