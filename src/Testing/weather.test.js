import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';

import Weather from '../Subcomponents/Weather';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../Redux/weatherSlice';
import { getCoordinates } from '../API/geocodingAPI';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../Redux/weatherSlice', () => ({
  fetchWeatherData: jest.fn(),
}));

jest.mock('../API/geocodingAPI', () => ({
  getCoordinates: jest.fn(),
}));

describe('Weather component', () => {
  const mockDispatch = jest.fn();

  const mockWeatherData = {
    current: {
      temperature_2m: 25,
      apparent_temperature: 27,
      relative_humidity_2m: 60,
      precipitation: 1.2,
      rain: 0.8,
      surface_pressure: 1015,
      wind_speed_10m: 12,
      weather_code: 2,
    },

    daily: {
      time: [
        '2026-09-25',
        '2026-09-26',
        '2026-09-27',
        '2026-09-28',
        '2026-09-29',
        '2026-09-30',
        '2026-10-01',
      ],

      weather_code: [2, 1, 3, 61, 0, 63, 80],

      temperature_2m_max: [
        28,
        29,
        25,
        23,
        27,
        24,
        26,
      ],

      temperature_2m_min: [
        15,
        16,
        14,
        13,
        15,
        14,
        16,
      ],

      rain_sum: [
        0,
        0,
        1.5,
        4,
        0,
        3,
        2,
      ],

      wind_speed_10m_max: [
        18,
        20,
        16,
        22,
        15,
        19,
        21,
      ],
    },
  };

  const setWeatherState = (overrides = {}) => {
    const state = {
      weather: mockWeatherData,
      status: 'succeeded',
      error: null,
      ...overrides,
    };

    useSelector.mockImplementation((selector) =>
      selector({
        weather: state,
      })
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(mockDispatch);

    fetchWeatherData.mockImplementation((coordinates) => ({
      type: 'weather/fetchWeatherData',
      payload: coordinates,
    }));
  });

  test('fetches Pretoria weather when the component starts idle', () => {
    setWeatherState({
      weather: {},
      status: 'idle',
      error: null,
    });

    render(<Weather />);

    expect(fetchWeatherData).toHaveBeenCalledWith({
      latitude: -25.7479,
      longitude: 28.2293,
    });

    expect(mockDispatch).toHaveBeenCalled();
  });

  test('displays loading state while weather data is loading', () => {
    setWeatherState({
      weather: {},
      status: 'loading',
      error: null,
    });

    render(<Weather />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays weather data and the 7-day forecast when successful', () => {
    setWeatherState();

    const { container } = render(<Weather />);

    expect(
      screen.getByRole('heading', {
        name: /7-day forecast/i,
      })
    ).toBeInTheDocument();

    const currentWeather = screen.getByRole('region', {
      name: 'Current weather',
    });

    expect(
      within(currentWeather).getByText('Partly Cloudy')
    ).toBeInTheDocument();

    expect(
      within(currentWeather).getByText('25°C')
    ).toBeInTheDocument();

    expect(
      within(currentWeather).getByText('27°C')
    ).toBeInTheDocument();

    expect(
      within(currentWeather).getByText('60%')
    ).toBeInTheDocument();

    expect(
      within(currentWeather).getByText('1.2 mm')
    ).toBeInTheDocument();

    expect(
      within(currentWeather).getByText('12 km/h')
    ).toBeInTheDocument();

    expect(
      within(currentWeather).getByText('1015 hPa')
    ).toBeInTheDocument();

    expect(
      container.querySelectorAll('.forecast-item')
    ).toHaveLength(7);
  });

  test('displays an error and allows the user to retry', () => {
    setWeatherState({
      weather: {},
      status: 'failed',
      error: 'Weather service unavailable',
    });

    render(<Weather />);

    expect(
      screen.getByText('Unable to fetch weather data!')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Error: Weather service unavailable')
    ).toBeInTheDocument();

    const retryButton = screen.getByRole('button', {
      name: 'Retry',
    });

    fireEvent.click(retryButton);

    expect(fetchWeatherData).toHaveBeenCalledWith({
      latitude: -25.7479,
      longitude: 28.2293,
    });

    expect(mockDispatch).toHaveBeenCalled();
  });

  test(
    'searches for a city and requests weather for the new coordinates',
    async () => {
      setWeatherState();

      getCoordinates.mockResolvedValue({
        name: 'Cape Town',
        country: 'South Africa',
        latitude: -33.9249,
        longitude: 18.4241,
      });

      render(<Weather />);

      const input = screen.getByPlaceholderText(
        'Search any city...'
      );

      const searchButton = screen.getByRole('button', {
        name: 'Search',
      });

      fireEvent.change(input, {
        target: {
          value: '  Cape Town  ',
        },
      });

      fireEvent.click(searchButton);

      await waitFor(() => {
        expect(getCoordinates).toHaveBeenCalledWith('Cape Town');
      });

      await waitFor(() => {
        expect(fetchWeatherData).toHaveBeenCalledWith({
          latitude: -33.9249,
          longitude: 18.4241,
        });
      });

      expect(
        screen.getByRole('heading', {
          name: /Cape Town, South Africa/i,
        })
      ).toBeInTheDocument();
    }
  );

  test(
    'does not search when the city input is empty',
    async () => {
      setWeatherState();

      render(<Weather />);

      const input = screen.getByPlaceholderText(
        'Search any city...'
      );

      const searchButton = screen.getByRole('button', {
        name: 'Search',
      });

      fireEvent.change(input, {
        target: {
          value: '   ',
        },
      });

      fireEvent.click(searchButton);

      await waitFor(() => {
        expect(getCoordinates).not.toHaveBeenCalled();
      });

      expect(fetchWeatherData).not.toHaveBeenCalled();
    }
  );
});