const BASE_URL = "https://rest.isric.org/soilgrids/v2.0/properties?lat=-25.7479&lon=28.2293";

export const getSoilData = async (latitude, longitude) => {
    const url = 
    `${BASE_URL}?lat=${latitude}&lon=${longitude}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch soil data')
        
    }

    const data = await response.json();

    console.log(data);

    return data;
};