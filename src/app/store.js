import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice'
import resultsReducer from '../features/results/resultsSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    result: resultsReducer
  },
});
