import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { text: '' },
  reducers: {
    filter: (state, action) => {
      state.text = action.payload;
    },
  },
  selectors: {
    selectFilter: state => state.text,
  },
});

export const filterReducer = filterSlice.reducer;
export const { filter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;
