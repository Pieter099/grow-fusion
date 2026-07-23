import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../Redux/weatherSlice';

import {
    WiThermometer,
    WiHumidity,
    WiStrongWind
   // WiBarometer,
   // WiCloudy,
   // WiRain,
   // WiSnowflakeCold,
   // WiDaySunny,
   // WiNightClear
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

    if (!weather.current) {
        return null;
    }

    const current = weather.current;

   // weather.current.temperature_2m

    return (
        <>
          <section className="weather-card">
            <div className='weather-item'>
                <WiThermometer size={55} />
                <h4>Temperature:</h4>
                <p>{current.temperature_2m}°C</p>
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
          </section>
        </>
    )
};

export default Weather;