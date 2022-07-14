import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    token: null,
    role: 'guest',
  },
  signIn_status: 'Not Signed In',
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
      state.signIn_status = action.payload;
    },
  },
});

export const { GET_USER_DATA, CHANGE_USER_STATUS } = tokenSlice.actions;
export default tokenSlice.reducer;