import { configureStore } from '@reduxjs/toolkit';
import filtersRowReducer from './slices/filtersRowSlice';

export default configureStore({
  reducer: {
    filtersRow: filtersRowReducer
  }
})