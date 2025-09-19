import { configureStore } from '@reduxjs/toolkit';
import cropPriceReducer from './CropPriceSlice';

const store = configureStore({
  reducer: {
    cropPrices: cropPriceReducer
  }
});

export default store;