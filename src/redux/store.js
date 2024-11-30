import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice.js';
import { filterReducer } from './filter/slice.js';
import { dropDownReducer } from './dropdown/slice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    dropdown: dropDownReducer,
  },
});

export default store;
