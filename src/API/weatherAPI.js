const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeatherData = async (latitude, longitude) => {
    const response = await fetch(
        `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&
        current=
        temperature_2m,
        relative_humidity_2m,
        wind_speed_10m,
        weather_code&timezone=auto
        apparent_temperature,
        precipitation,
        rain,
        surface_pressure`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    return await response.json();
};