import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../Redux/weatherSlice';

import {
    WiThermometer,
    WiHumidity,
    WiStrongWind,
    WiBarometer,
   // WiCloudy,
    WiRain,
   // WiSnowflakeCold,
   // WiDaySunny
} from 'react-icons/wi';

const Weather = () => {
    const dispatch = useDispatch();

    const {
        weather,
        status,
        error
    } = useSelector((state) => state.weather);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchWeatherData({
                latitude: -25.7479,  // Example latitude for Pretoria, South Africa
                longitude: 28.2293  // Example longitude for Pretoria, South Africa
            }));
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const current = weather.current;

    if (!weather.current) {
        return null;
    }

    const weatherDescriptions = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Heavy Drizzle",
    61: "Light Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Snow",
    80: "Rain Showers",
    95: "Thunderstorm"
    };

    const weatherText = weatherDescriptions[current.weather_code] || 'Unknown';

    return (
        <>
          <section className="weather-card">
            <div className="weather-item">
              <h4>Conditions</h4>
              <p>{weatherText}</p>
            </div>
            <div className='weather-item'>
                <WiThermometer size={55} />
                <h4>Temperature:</h4>
                <p>{current.temperature_2m}°C</p>
            </div>
            <div className="weather-item">
              <WiThermometer size={55} />
              <h4>Feels Like</h4>
              <p>{current.apparent_temperature}°C</p>
            </div>
            <div className='weather-item'>
                <WiHumidity size={55}/>
                <h4>Humidity:</h4>
                <p>{current.relative_humidity_2m}%</p>
            </div>
            <div className='weather-item'>
                <WiStrongWind size={55}/>
                <h4>Wind Speed:</h4>
                <p>{current.wind_speed_10m}km/h</p>
            </div>
            <div className="weather-item">
              <WiRain size={55} />
              <h4>Rain</h4>
              <p>{current.rain} mm</p>
            </div>
            <div className="weather-item">
              <WiRain size={55} />
              <h4>Precipitation</h4>
              <p>{current.precipitation} mm</p>
            </div>
            <div className="weather-item">
              <WiBarometer size={55} />
              <h4>Pressure</h4>
              <p>{current.surface_pressure} hPa</p>
            </div>
          </section>
        </>
    )
};

export default Weather;