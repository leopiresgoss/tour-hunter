import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const homepageTourAPI = createAsyncThunk('hometour/tours', async () => {
  const response = await fetch('https://tourhunterapi.herokuapp.com/tours');
  const data = await response.json();
  return data;
});

const homeTour = {
  startPoint: 0,
  status: 'Loading',
  tours: [],
};

export const hometourSlice = createSlice({
  name: 'hometour',
  initialState: homeTour,
  reducers: {
    updateRightTours: (state) => ({
      ...state,
      startPoint: state.startPoint + 1,
      tours: state.tours.map((el, i) => {
        if (i >= state.startPoint + 1 && i <= state.startPoint + 3) {
          return {
            ...el,
            visible: true,
          };
        }
        return {
          ...el,
          visible: false,
        };
      }),
    }),
    updateLeftTours: (state) => ({
      ...state,
      startPoint: state.startPoint - 1,
      tours: state.tours.map((el, i) => {
        if (i >= state.startPoint - 1 && i <= state.startPoint + 1) {
          return {
            ...el,
            visible: true,
          };
        }
        return {
          ...el,
          visible: false,
        };
      }),
    }),
  },
  extraReducers: {
    [homepageTourAPI.pending]: (state) => ({ ...state, status: 'Loading' }),
    [homepageTourAPI.fulfilled]: (state, action) => ({
      ...state,
      tours: action.payload.map((tour, i) => {
        if (i >= state.startPoint && i <= state.startPoint + 2) {
          return {
            ...tour,
            visible: true,
          };
        }
        return {
          ...tour,
          visible: false,
        };
      }),
      status: 'Success',
    }),
    [homepageTourAPI.rejected]: (state) => ({ ...state, status: 'Failed' }),
  },
});

export const { updateRightTours, updateLeftTours } = hometourSlice.actions;
export default hometourSlice.reducer;
