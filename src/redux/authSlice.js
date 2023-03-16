import { createSlice } from '@reduxjs/toolkit';
import serviceApi from 'api/serviceApi';
import { setUser } from './userSlice';

const authSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken: (state, action) => action.payload,
  }
});

export const authReducer = authSlice.reducer;

export const {
    setToken,
} = authSlice.actions;

export const login = (email, password) => (dispatch) => {
  return serviceApi.loginUser(email, password).then(
    response => dispatch(setToken(response?.data?.split(" ")[1] || "")),
    error => dispatch(setToken(null))
  );
}

export const logout = () => (dispatch) => {
    dispatch(setUser(null));
    dispatch(setToken(null));
}
