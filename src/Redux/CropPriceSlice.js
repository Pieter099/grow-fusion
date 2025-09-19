import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCropPrices = createAsyncThunk(
  'cropPrices/fetchCropPrices',
  async () => {
    const response = await fetch();
    return response.data;
  }
);

const cropPriceSlice = createSlice({
  name: 'cropPrices',
  initialState: {
    prices: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCropPrices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCropPrices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.prices = action.payload;
      })
      .addCase(fetchCropPrices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default cropPriceSlice.reducer;