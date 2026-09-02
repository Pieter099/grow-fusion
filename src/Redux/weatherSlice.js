import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherData } from '../API/weatherAPI';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async ({latitude, longitude}, { rejectWithValue }) => {

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return rejectWithValue('Invalid location coordinates');
    }

    try {
      const data = await getWeatherData(latitude, longitude);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || 'Failed to fetch weather data'
      );
    }
  }
);

const initialState = {
  weather: {},
  status: 'idle',
  error: null
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  }
});

export default weatherSlice.reducer;