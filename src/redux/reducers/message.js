import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  data: {
    message: null,
    color: 'black',
    type: 'info',
  },
};

const flashMessageSlice = createSlice({
  name: 'flashMessage',
  initialState,
  reducers: {
    showFlash: (state, action) => ({ ...state, ...action.payload }),
    removeFlash: (state) => ({ ...state, show: false }),
    setStyles: (state, action) => ({ ...state, styles: action.payload }),
  },

});

export const { showFlash, removeFlash, setStyles } = flashMessageSlice.actions;

export default flashMessageSlice.reducer;
