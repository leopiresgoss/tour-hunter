import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import deleteTourAPI from '../../api/deleteTour';
import addTourAPI from '../../api/addTour';

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const response = await axios.get('https://tourhunterapi.herokuapp.com/tours');
  const data = await response.data;
  return data;
});

export const deleteTour = createAsyncThunk(
  'tours/deleteTour',
  async ({ token, id }, { rejectWithValue }) => {
    const data = await deleteTourAPI(token, id);
    if (data.includes('Deleted successfully')) {
      return { id };
    }
    return rejectWithValue("You don't have enough permissions");
  },
);

export const addTour = createAsyncThunk(
  'tours/addTour',
  async ({ token, formData }, { rejectWithValue }) => {
    const res = await addTourAPI(token, formData);

    if (res.includes('Tour was created succesfully')) {
      return res;
    }

    return rejectWithValue('Tour not created');
  },
);

/* eslint no-param-reassign: "error" */

export const tours = createSlice({
  name: 'tours',
  initialState: {
    package: [],
    status: null,
  },
  reducers: {
    setState: (state, action) => {
      state.status = action.payload;
    },
  },
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
    [addTour.fulfilled]: (state) => {
      state.status = 'Added';
    },
    [addTour.rejected]: (state) => {
      state.status = 'Tour not created';
    },
  },
});

export const { setState } = tours.actions;
export default tours.reducer;
