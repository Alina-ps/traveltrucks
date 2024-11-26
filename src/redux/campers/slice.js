import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './operations.js';

const initialState = {
  items: [],
  selectedCamper: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchCampers.pending, fetchCamperById.pending),
        (state) => {
          state.isLoading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.fulfilled, fetchCamperById.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.rejected, fetchCamperById.rejected),
        (state) => {
          state.isLoading = false;
          state.error = true;
        }
      );
  },
});

export const campersReducer = slice.reducer;
