import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: "error" */

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null,
    signIn_status: 'Not Signed In',
    role: 'guest',
  },
  reducers: {
    GET_TOKEN: (state, action) => {
      state.package = action.payload;
    },
  },
});

export const { GET_TOKEN } = tokenSlice.actions;
export default tokenSlice.reducer;
