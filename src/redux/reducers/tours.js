import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import deleteTourAPI from '../../api/deleteTour';

export const fetchTours = createAsyncThunk('admin/tours', async () => {
  const response = await axios.get('https://tourhunterapi.herokuapp.com/tours');
  const data = await response.data;
  return data;
});

export const deleteTour = createAsyncThunk(
  'admin/tour/delete',
  async ({ token, id }) => {
    const data = deleteTourAPI(token, id);
    return { data, id };
  },
);

/* eslint no-param-reassign: "error" */

export const tours = createSlice({
  name: 'tours',
  initialState: {
    package: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTours.pending]: (state) => {
      state.status = 'Loading';
    },
    [fetchTours.fulfilled]: (state, action) => {
      state.package = action.payload.map((data) => ({
        ...data,
        available: true,
      }));
      state.status = 'Success';
    },
    [fetchTours.rejected]: (state) => {
      state.status = 'Failed';
    },
    [deleteTour.pending]: (state) => {
      state.status = 'Loading';
    },
    [deleteTour.fulfilled]: (state, action) => {
      state.package = state.package.map((data) => {
        if (action.payload.id === data.id) {
          data.available = false;
        }
        return data;
      });
      state.status = 'Deleted';
    },
    [deleteTour.rejected]: (state) => {
      state.status = 'Failed';
    },
  },
});

export default tours.reducer;
