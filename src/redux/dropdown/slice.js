import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  options: [
    'Kyiv, Ukraine',
    'Poltava, Ukraine',
    'Dnipro, Ukraine',
    'Odesa, Ukraine',
    'Kharkiv, Ukraine',
    'Sumy, Ukraine',
    'Lviv, Ukraine',
  ],
  selectedValue: '',
  isOpen: false,
};

const slice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    openDropdown(state) {
      state.isOpen = true;
    },
    closeDropdown(state) {
      state.isOpen = false;
    },
    selectValue(state, action) {
      state.selectedValue = action.payload;
      state.isOpen = false;
    },
    resetLocation(state) {
      state.selectedValue = '';
    },
  },
});

export const dropDownReducer = slice.reducer;
export const { openDropdown, closeDropdown, selectValue, resetLocation } =
  slice.actions;
