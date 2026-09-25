import { configureStore } from '@reduxjs/toolkit';
import weatherReducer, {
  fetchWeatherData,
} from '../Redux/weatherSlice';
import { getWeatherData } from '../API/weatherAPI';

jest.mock('../API/weatherAPI', () => ({
  getWeatherData: jest.fn(),
}));

describe('weatherSlice', () => {
  const mockWeatherData = {
    current: {
      temperature_2m: 25,
      apparent_temperature: 26,
      relative_humidity_2m: 60,
      precipitation: 0,
      rain: 0,
      surface_pressure: 1015,
      wind_speed_10m: 10,
      weather_code: 1,
    },
    daily: {
      weather_code: [1, 2],
      temperature_2m_max: [28, 30],
      temperature_2m_min: [15, 16],
      rain_sum: [0, 2],
      wind_speed_10m_max: [15, 18],
    },
  };

  const createTestStore = () =>
    configureStore({
      reducer: {
        weather: weatherReducer,
      },
    });

  test('starts with the correct initial state', () => {
    const store = createTestStore();

    expect(store.getState().weather).toEqual({
      weather: {},
      status: 'idle',
      error: null,
    });
  });

  test('changes to loading while fetching weather data', () => {
    let resolveRequest;

    getWeatherData.mockReturnValue(
      new Promise((resolve) => {
        resolveRequest = resolve;
      })
    );

    const store = createTestStore();

    const request = store.dispatch(
      fetchWeatherData({
        latitude: -25.7479,
        longitude: 28.2293,
      })
    );

    expect(store.getState().weather.status).toBe('loading');
    expect(store.getState().weather.error).toBeNull();

    resolveRequest(mockWeatherData);

    return request;
  });

  test('stores weather data when the request succeeds', async () => {
    getWeatherData.mockResolvedValue(mockWeatherData);

    const store = createTestStore();

    await store.dispatch(
      fetchWeatherData({
        latitude: -25.7479,
        longitude: 28.2293,
      })
    );

    expect(getWeatherData).toHaveBeenCalledWith(-25.7479, 28.2293);
    expect(store.getState().weather.status).toBe('succeeded');
    expect(store.getState().weather.weather).toEqual(mockWeatherData);
    expect(store.getState().weather.error).toBeNull();
  });

  test('stores an error when the weather request fails', async () => {
    getWeatherData.mockRejectedValue(
      new Error('Weather service unavailable')
    );

    const store = createTestStore();

    await store.dispatch(
      fetchWeatherData({
        latitude: -25.7479,
        longitude: 28.2293,
      })
    );

    expect(store.getState().weather.status).toBe('failed');
    expect(store.getState().weather.error).toBe(
      'Weather service unavailable'
    );
    expect(store.getState().weather.weather).toEqual({});
  });

  test('rejects invalid coordinates without calling the weather API', async () => {
    const store = createTestStore();

    await store.dispatch(
      fetchWeatherData({
        latitude: 'invalid',
        longitude: 28.2293,
      })
    );

    expect(store.getState().weather.status).toBe('failed');
    expect(store.getState().weather.error).toBe(
      'Invalid location coordinates'
    );
    expect(getWeatherData).not.toHaveBeenCalled();
  });
});