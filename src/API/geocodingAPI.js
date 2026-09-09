const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

export const getCoordinates = async (city) => {
    if (typeof city !== "string" || !city.trim()) {
        throw new Error("Enter a valid city name");
    }

    const searchCity = city.trim();

    const response = await fetch(
        `${GEO_URL}?name=${encodeURIComponent(searchCity)}&count=1`
    );

     if (!response.ok) {
        const errorText = await response.text();

        throw new Error(
            errorText || `Geocoding API request failed with status ${response.status}`
        );
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