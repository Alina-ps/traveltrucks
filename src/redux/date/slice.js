import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: null,
};

const slice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const dateReducer = slice.reducer;
export const { setSelectedDate } = slice.actions;
