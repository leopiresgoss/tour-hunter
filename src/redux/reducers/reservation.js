import { createSlice } from '@reduxjs/toolkit';
import makeReservation from '../../api/ReserveTour';

/* eslint no-param-reassign: "error" */
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    message: null,
    status: null,
  },
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [makeReservation.pending]: (state) => {
      state.status = 'Loading';
    },
    [makeReservation.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.status = 'Success';
    },
    [makeReservation.rejected]: (state) => {
      state.status = 'Failed';
    },
  },
});

export const { changeStatus } = reservationSlice.actions;
export default reservationSlice.reducer;
