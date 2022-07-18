import { createAsyncThunk } from '@reduxjs/toolkit';

const getReservations = createAsyncThunk(
  'myReservations/getReservations',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/my_reservations', {
      method: 'GET',
      headers: {
        // accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
);

export default getReservations;
