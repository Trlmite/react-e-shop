/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.loggedIn = true
    },
    logout(state) {
      state.loggedIn = false
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;