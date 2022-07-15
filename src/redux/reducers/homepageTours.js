import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/* eslint no-param-reassign: "error" */

export const homepageTourAPI = createAsyncThunk('hometour/tours', async () => {
  const response = await fetch('https://tourhunterapi.herokuapp.com/tours');
  const data = await response.json();
  return data;
});

const homeTour = {
  status: 'Loading',
  tours: [],
};

export const hometourSlice = createSlice({
  name: 'hometour',
  initialState: homeTour,
  extraReducers: {
    [homepageTourAPI.pending]: (state) => {
      state.status = 'Loading';
    },
    [homepageTourAPI.fulfilled]: (state, action) => {
      state.tours = action.payload;
      state.status = 'Success';
    },
    [homepageTourAPI.rejected]: (state) => {
      state.status = 'Failed';
    },
  },
});

export default hometourSlice.reducer;
