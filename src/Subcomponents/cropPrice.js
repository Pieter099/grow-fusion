import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropPrices } from "../Redux/CropPriceSlice";
import "../Styles/cropPrice.css";

const CropPrice = () => {
  const dispatch = useDispatch();

  const { prices, status, error } = useSelector(
    (state) => state.cropPrices
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCropPrices());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading crop prices...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  const wantedCrops = [
  "Barley",
  "Corn",
  "Cotton",
  "Canola",
  "Oats",
  "Wheat"
];

const commodities = Object.values(prices).filter(
  (item) => wantedCrops.includes(item.display_name)
);

console.log("Prices:");
console.log(prices);

console.log("Commodities:");
console.log(commodities);

  return (
    <table className="price-table">
      <thead>
        <tr>
          <th>Commodity</th>
          <th>Price</th>
          <th>Unit</th>
          <th>Category</th>
          <th>Source</th>
          <th>Updated</th>
          <th>Change (24h)</th>
        </tr>
      </thead>

      <tbody>
        {commodities.map((commodity) => {
          const changePercent =
            commodity.change_24h?.percent ?? 0;

          return (
            <tr key={commodity.id}>
              <td>{commodity.display_name}</td>

              <td>
                {commodity.currency} {commodity.price}
              </td>

              <td>{commodity.unit}</td>

              <td>{commodity.category}</td>

              <td>
                {commodity.source.toUpperCase()}
              </td>

              <td>
                {new Date(
                  commodity.last_updated
                ).toLocaleDateString()}
              </td>

              <td
                className={
                  changePercent > 0
                    ? "positive"
                    : changePercent < 0
                    ? "negative"
                    : "neutral"
                }
              >
                {changePercent > 0 ? "+" : ""}
                {changePercent}%
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CropPrice;