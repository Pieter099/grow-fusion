// API/weatherAPI.js

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeatherData = async (latitude, longitude) => {

    if (!Number(latitude) || !Number(longitude)) {
        throw new Error("Invalid latitude or longitude");
    }

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

    const dailyWeather = [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "rain_sum",
        "wind_speed_10m_max"
    ].join(",");

    // Build the request URL
    const url =
        `${BASE_URL}` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=${currentWeather}` +
        `&daily=${dailyWeather}` +
        `&timezone=auto`;

    const response = await fetch(url);

if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Weather API request failed with status ${response.status}`);
}

    return response.json();
};