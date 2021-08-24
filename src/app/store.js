import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../actions/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
