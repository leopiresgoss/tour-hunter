import { createSlice } from '@reduxjs/toolkit';
import makeReservation from '../../api/ReserveTour';

/* eslint no-param-reassign: "error" */
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    package: {},
    status: null,
  },
  reducers: {
    setPackage: (state, action) => {
      state.package = action.payload;
    },
  },
  extraReducers: {
    [makeReservation.pending]: (state) => {
      state.status = 'Loading';
    },
    [makeReservation.fulfilled]: (state, action) => {
      state.package = action.payload;
      state.status = 'Success';
    },
    [makeReservation.rejected]: (state) => {
      state.status = 'Failed';
    },
  },
});

export const { setPackage } = reservationSlice.actions;
export default reservationSlice.reducer;
