/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, {user, token}) {
      state.loggedIn = true
      state.user = user;
      state.token = token;
    },
    logout(state) {
      state.loggedIn = false,
      state.user = null,
      state.token = null
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;