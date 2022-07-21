import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    token: null,
    role: 'guest',
  },
  isSignedIn: false,
};

/* eslint no-param-reassign: "error" */
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    GET_USER_DATA: (state, action) => {
      state.userData = action.payload;
    },
    CHANGE_USER_STATUS: (state, action) => {
      state.isSignedIn = action.payload;
    },

    signOut: (state) => {
      state.userData = {
        token: null,
        role: 'guest',
      };
      state.isSignedIn = false;
    },
  },
});

export const { GET_USER_DATA, CHANGE_USER_STATUS, signOut } = tokenSlice.actions;
export default tokenSlice.reducer;
