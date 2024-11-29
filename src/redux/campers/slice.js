import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './operations.js';

const initialState = {
  items: [],
  total: 23,
  page: 1,
  limit: 4,
  selectedCamper: {},
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
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
export const { setPage, setLimit } = slice.actions;
