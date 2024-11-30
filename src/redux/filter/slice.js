import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  transmission: false,
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  vehicleType: false,
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    setAC: (state, action) => {
      state.AC = action.payload;
    },
    setBathroom: (state, action) => {
      state.bathroom = action.payload;
    },
    setKitchen: (state, action) => {
      state.kitchen = action.payload;
    },
    setTV: (state, action) => {
      state.TV = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const filterReducer = slice.reducer;
export const {
  setLocationFilter,
  resetFilters,
  setTransmission,
  setAC,
  setBathroom,
  setKitchen,
  setTV,
  setVehicleType,
} = slice.actions;
