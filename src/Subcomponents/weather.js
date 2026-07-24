import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../Redux/weatherSlice';

import {
    WiThermometer,
    WiHumidity,
    WiStrongWind,
    WiBarometer,
    WiCloudy,
    WiRain,
    WiSnowflakeCold,
    WiThunderstorm,
   // WiNightAltRain,
    WiFog,
    WiCloud,
    WiSnow,
   // WiNightClear,
    WiShowers,
    WiStormShowers,
    WiDaySunny,
    WiHot,
    WiHail
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

    let temperatureIcon = <WiSnowflakeCold size={55} /> || <WiHot size={55} />;

    if (current.temperature_2m < 0) {
        temperatureIcon = <WiSnowflakeCold size={55} />;
    }

    if (current.temperature_2m > 40) {
        temperatureIcon = <WiHot size={55} />;
    }

    const weatherConditions = {
      0: {
        text: "Clear Sky",
        icon: <WiDaySunny size={55} />
      },
      1: {
        text: "Mainly Clear",
        icon: <WiDaySunny size={55} />
      },
      2: {
        text: "Partly Cloudy",
        icon: <WiCloudy size={55} />
      },
      3: {
        text: "Overcast",
        icon: <WiCloud size={55} />
      },
      45: {
        text: "Fog",
        icon: <WiFog size={55} />
      },
      48: {
        text: "Fog",
        icon: <WiFog size={55} />
      },
      51: {
        text: "Light Drizzle",
        icon: <WiShowers size={55} />
      },
      53: {
        text: "Moderate Drizzle",
        icon: <WiShowers size={55} />
      },
      55: {
        text: "Heavy Drizzle",
        icon: <WiShowers size={55} />
      },
      61: {
        text: "Light Rain",
        icon: <WiRain size={55} />
      },
      63: {
        text: "Moderate Rain",
        icon: <WiRain size={55} />
      },
      65: {
        text: "Heavy Rain",
        icon: <WiRain size={55} />
      },
      71: {
        text: "Rain Shower",
        icon: <WiStormShowers size={55} />
      },
      80: {
        text: "Snow",
        icon: <WiSnow size={55} />
      },
      95: {
        text: "Thunderstorm",
        icon: <WiThunderstorm size={55} />
      },
      96: {
        text: "Thunderstorm with Hail",
        icon: <WiHail size={55} />
      },
      99: {
        text: "Heavy Hail",
        icon: <WiHail size={55} />
      }
    };

   const currentWeatherCondition =
     weatherConditions[current.weather_code] ||
     {
      text: "Unknown",
      icon: <WiCloud size={55}/>
     };

    return (
        <>
          <section className="weather-card">
            <div className="weather-item">
              <h4>Conditions</h4>
              <p>{currentWeatherCondition}</p>
            </div>
            <div className='weather-item'>
                <WiThermometer size={55} />
                {temperatureIcon}
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
            <div className='weather-item'>
                <WiStrongWind size={55}/>
                <h4>Wind Speed:</h4>
                <p>{current.wind_speed_10m}km/h</p>
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