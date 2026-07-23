import { configureStore } from '@reduxjs/toolkit';
import cropPriceReducer from './farmConSlice';

const store = configureStore({
  reducer: {
    cropPrices: cropPriceReducer
  }
});

export default store;