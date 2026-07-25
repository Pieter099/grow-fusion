const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

export const getCoordinates = async (city) => {
    const response = await fetch(`${GEO_URL}?name=${encodeURIComponent(city)}&count=1`);

     if (!response.ok) {
        throw new Error("Failed to fetch coordinates");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    return {
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
        name: data.results[0].name,
        country: data.results[0].country
    };
};