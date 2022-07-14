import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reserveTour from '../api/reservationCall';

/* eslint no-param-reassign: "error" */

export const makeReservation = createAsyncThunk(
  'reservation/postReservation',
  reserveTour(),
);

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    package: {},
    status: null,
  },
  reducers: {
    SETPACKAGE: (state, action) => {
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

export const { SETPACKAGE } = reservationSlice.actions;
export default reservationSlice.reducer;
