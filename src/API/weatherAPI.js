// API/weatherAPI.js

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeatherData = async (latitude, longitude) => {

    // Current weather variables we want from Open-Meteo
    const currentWeather = [
        "temperature_2m",
        "apparent_temperature",
        "relative_humidity_2m",
        "precipitation",
        "rain",
        "surface_pressure",
        "wind_speed_10m",
        "weather_code"
    ].join(",");

    // Build the request URL
    const url =
        `${BASE_URL}` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=${currentWeather}` +
        `&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    return response.json();
};