import React from "react";
import "../Styles/table.css";

const cropsData = [
  { name: "🌿 Barley", planting: ["Mar", "Apr", "Oct", "Nov"], harvesting: ["Jun", "Jul", "Aug"] },
  { name: "🌱 Canola", planting: ["Mar", "Apr", "Sep", "Oct"], harvesting: ["Jun", "Jul"] },
  { name: "🌽 Corn", planting: ["Apr", "May"], harvesting: ["Sep", "Oct"] },
  { name: "☁ Cotton", planting: ["Apr", "May"], harvesting: ["Oct", "Nov"] },
  { name: "🌾 Oats", planting: ["Mar", "Apr", "Sep", "Oct"], harvesting: ["Jun", "Jul"] },
  { name: "🌾 Wheat", planting: ["Mar", "Apr", "Oct", "Nov"], harvesting: ["Jun", "Jul", "Aug"] },
];

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const CropTable = () => {
  return (
    <section className="cropTable">
      <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th rowSpan="2">Crop</th>
            <th colSpan="12">Year 1</th>
            <th colSpan="12">Year 2</th>
          </tr>
          <tr>
            {months.map((month, index) => (
              <th key={index}>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cropsData.map((crop, index) => (
            <tr key={index}>
              <td>{crop.name}</td>
              {months.map((month, index) => {
                if (crop.planting.includes(month)) return <td key={index} className="planting"></td>;
                if (crop.harvesting.includes(month)) return <td key={index} className="harvesting"></td>;
                return <td key={index}></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      {/* Legend */}
      <div className="legend">
        <div className="legendInfo">
          <label className="info-1"></label>
          <p>Planting</p>
        </div>
        <div className="legendInfo">
          <label className="info-2"></label>
          <p>Harvesting</p>
        </div>
      </div>
    </section>
  );
};

export default CropTable;
