import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../Redux/weatherSlice';
import { getCoordinates } from '../API/geocodingAPI';
import "../Styles/weather.css";

import { WiThermometer } from "@react-icons/all-files/wi/WiThermometer";
import { WiHumidity } from "@react-icons/all-files/wi/WiHumidity";
import { WiStrongWind } from "@react-icons/all-files/wi/WiStrongWind";
import { WiBarometer } from "@react-icons/all-files/wi/WiBarometer";
import { WiCloudy } from "@react-icons/all-files/wi/WiCloudy";
import { WiRain } from "@react-icons/all-files/wi/WiRain";
import { WiSnowflakeCold } from "@react-icons/all-files/wi/WiSnowflakeCold";
import { WiThunderstorm } from "@react-icons/all-files/wi/WiThunderstorm";
import { WiFog } from "@react-icons/all-files/wi/WiFog";
import { WiCloud } from "@react-icons/all-files/wi/WiCloud";
import { WiSnow } from "@react-icons/all-files/wi/WiSnow";
import { WiShowers } from "@react-icons/all-files/wi/WiShowers";
import { WiStormShowers } from "@react-icons/all-files/wi/WiStormShowers";
import { WiDaySunny } from "@react-icons/all-files/wi/WiDaySunny";
import { WiHot } from "@react-icons/all-files/wi/WiHot";
import { WiHail } from "@react-icons/all-files/wi/WiHail";

// ---------------------------------------
// Weather Code Descriptions + Icons
// ---------------------------------------

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
        text: "Depositing Fog",
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
        text: "Snow",
        icon: <WiSnow size={55} />
    },

    80: {
        text: "Rain Showers",
        icon: <WiStormShowers size={55} />
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


const Weather = () => {

    const dispatch = useDispatch();

    const { weather, status, error } = useSelector(
        (state) => state.weather
    );

    useEffect(() => {

        if (status === "idle") {

            dispatch(fetchWeatherData({

                latitude: -25.7479,
                longitude: 28.2293

            }));

        }

    }, [dispatch, status]);

    const [city, setCity] = useState('Pretoria');

    const [location, setLocation] = useState({
            city: "Pretoria",
            country: "South Africa"
        });

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>Error: {error}</div>;
    }

    if (!weather.current || !weather.daily) {
        return null;
    }

    const current = weather.current;

    const daily = weather.daily;

    const forecast = daily.time.map((date, index) => ({
    date,
    weatherCode: daily.weather_code[index],
    maxTemp: daily.temperature_2m_max[index],
    minTemp: daily.temperature_2m_min[index],
    rain: daily.rain_sum[index],
    windSpeed: daily.wind_speed_10m_max[index]
}));

const getDayName = (dateString) => {
    const [year, month, day] = dateString.split("-");

    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
    ).toLocaleDateString("en-US", {
        weekday: "short"
    });
};

    const today = new Date();

    const currentDate = today.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    // ---------------------------------------
    // Temperature Icon
    // ---------------------------------------

    let temperatureIcon = null;

    if (current.temperature_2m < 0) {
        temperatureIcon = <WiSnowflakeCold size={55} />;
    }

    else if (current.temperature_2m > 40) {
        temperatureIcon = <WiHot size={55} />;
    }

    // ---------------------------------------
    // Current Weather
    // ---------------------------------------

    const currentWeatherCondition =
        weatherConditions[current.weather_code] || {
            text: "Unknown",
            icon: <WiCloud size={55} />
        };

    //.====================
    // search function
    // ====================

    const handleSearch = async (event) => {
        event.preventDefault();

        const searchTerm = city.trim();

        if (!searchTerm) {
            return;
        };
        
        try {
            const location = await getCoordinates(city);

            setLocation({
                city: location.name,
                country: location.country
            });

            dispatch(fetchWeatherData({
                latitude: location.latitude,
                longitude: location.longitude
            }));
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <section className='search'>
                <form className="weather-search" onSubmit={handleSearch}>
                  <label htmlFor="city-search" className="sr-only">
                    Search for a city:
                </label>
                  <input
                    id="city-search"
                    type="text"
                    placeholder="Search any city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <button onClick={handleSearch}>
                    Search
                  </button>
                </form>
            </section>
            <div className='location-name'>
                <h2>
                    {location.city}, {location.country}
                </h2>
                <p>{currentDate}</p>
            </div>
            <section className="weather-card" aria-label='current weather'>
                <article className="weather-item">
                    {currentWeatherCondition.icon}
                    <h4>Conditions</h4>
                    <p>{currentWeatherCondition.text}</p>
                </article>
                <article className="weather-item">
                    <WiThermometer size={55} />
                    <h4>Temperature</h4>
                    <p>{current.temperature_2m}°C</p>
                    <h4>Feels Like</h4>
                    <p>{current.apparent_temperature}°C</p>
                    {temperatureIcon}
                </article>
                <article className="weather-item">
                    <WiHumidity size={55} />
                    <h4>Humidity</h4>
                    <p>{current.relative_humidity_2m}%</p>
                </article>
                <article className="weather-item">
                    <WiRain size={55} />
                    <h4>Rain</h4>
                    <p>{current.rain} mm</p>
                </article>
                <article className="weather-item">
                    <WiRain size={55} />
                    <h4>Precipitation</h4>
                    <p>{current.precipitation} mm</p>
                </article>
                <article className="weather-item">
                    <WiStrongWind size={55} />
                    <h4>Wind Speed</h4>
                    <p>{current.wind_speed_10m} km/h</p>
                </article>
                <article className="weather-item">
                    <WiBarometer size={55} />
                    <h4>Pressure</h4>
                    <p>{current.surface_pressure} hPa</p>
                </article>
            </section>
            <section className="forecast-card" aria-labelledby="forecast-heading">
                <h3>7-Day Forecast</h3>
                <article className="forecast-container">
                    {forecast.map((day) => {
                    const condition =
                    weatherConditions[day.weatherCode] || {
                    text: "Unknown",
                    icon: <WiCloud size={40}/>
                    };
                    return (
                    <div
                    className="forecast-item"
                    key={day.date}
                    >
                    <h3 className='week-day'>{getDayName(day.date)}</h3>
                    {condition.icon}
                    <p>{condition.text}</p>
                    <p>
                        <WiThermometer size={45} /> 
                        L: {day.minTemp}°C
                        H: {day.maxTemp}°C
                    </p>
                    <p>
                        <WiRain size={45} /> 
                        {day.rain} mm
                    </p>
                    <p>
                        <WiStrongWind size={45} /> 
                        {day.windSpeed} km/h
                    </p>
                  </div>
                );
              })}
            </article>
          </section>
        </>
    );
};

export default Weather;