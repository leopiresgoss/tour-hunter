import { createAsyncThunk } from '@reduxjs/toolkit';

const makeReservation = createAsyncThunk(
  'reservation/postReservation',
  async (tourPackage) => {
    const response = await fetch('http://127.0.0.1:3000/reservations', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
      body: JSON.stringify(tourPackage),
    });
    const data = await response.json();
    return data;
  },
);

export default makeReservation;
