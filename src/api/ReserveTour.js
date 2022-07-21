import { createAsyncThunk } from '@reduxjs/toolkit';

const makeReservation = createAsyncThunk(
  'reservation/postReservation',
  async (tourPackage) => {
    const response = await fetch('https://tourhunterapi.herokuapp.com/reservations', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
      body: JSON.stringify(tourPackage),
    });
    const data = await response.json();
    if (data.message !== 'Booked successfully.') {
      return 'Failure';
    }

    return data.message;
  },
);

export default makeReservation;
