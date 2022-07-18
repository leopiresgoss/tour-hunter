import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/* eslint no-param-reassign: "error" */

export const homepageTourAPI = createAsyncThunk('hometour/tours', async () => {
  const response = await fetch('https://tourhunterapi.herokuapp.com/tours');
  const data = await response.json();
  return data.map((tour, index) => {
    if (index < 3) {
      return {
        ...tour,
        visible: true,
      };
    }
    return {
      ...tour,
      visible: false,
    };
  });
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
    updateRightTours: (state) => {
      // remove visible tours
      if (state.tours.length > state.start_point + 1) {
        state.tours[state.startPoint].visible = false;
        state.start_point += 1;
        // put visible in the next 3 tours
        state.tours[state.startPoint].visible = true;
        state.tours[state.startPoint + 1].visible = true;
        state.tours[state.startPoint + 2].visible = true;
      }
    },
    extraReducers: {
      [homepageTourAPI.pending]: (state) => {
        state.status = 'Loading';
      },
      [homepageTourAPI.fulfilled]: (state, action) => {
        state.tours = action.payload.map((tour, index) => {
          if (index < 3) {
            return {
              ...tour,
              visible: true,
            };
          }
          return {
            ...tour,
            visible: false,
          };
        });
        state.status = 'Success';
      },
      [homepageTourAPI.rejected]: (state) => {
        state.status = 'Failed';
      },
    },
  },
});

export const { updateRightTours } = hometourSlice.actions;
export default hometourSlice.reducer;
