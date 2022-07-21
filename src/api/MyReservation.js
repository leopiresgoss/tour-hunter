import { createAsyncThunk } from '@reduxjs/toolkit';

const getReservations = createAsyncThunk(
  'myReservations/getReservations',
  async () => {
    const response = await fetch('https://tourhunterapi.herokuapp.com/my_reservations', {
      method: 'GET',
      headers: {
        // accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
    });
    const data = await response.json();
    return data;
  },
);

export default getReservations;
