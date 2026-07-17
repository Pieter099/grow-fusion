import React from "react";

const API_URL = "https://data.silv.app/commodities.json";

export const getCropPrices = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch crop prices");
  }

  const data = await response.json();
  return data;
}

const CropPrice = () => {
  return (
    <section className="crop-price-section"></section>
  )
};

export default CropPrice;