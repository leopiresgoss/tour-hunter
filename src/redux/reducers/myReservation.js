import { createSlice } from '@reduxjs/toolkit';
import getReservations from '../../api/MyReservation';

/* eslint no-param-reassign: "error" */
const myReservations = createSlice({
  name: 'myReservation',
  initialState: {
    status: null,
    reservations: [],
  },
  extraReducers: {
    [getReservations.pending]: (state) => {
      state.status = 'Loading';
    },
    [getReservations.fulfilled]: (state, action) => {
      state.reservations = action.payload;
      state.status = 'Success';
    },
    [getReservations.rejected]: (state) => {
      state.status = 'Failed';
    },
  },

});

export default myReservations.reducer;
