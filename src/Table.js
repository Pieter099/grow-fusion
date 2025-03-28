import React from "react";
import "./table.css";

const cropsData = [
  { name: "Barley", planting: ["Mar", "Apr", "Oct", "Nov"], harvesting: ["Jun", "Jul", "Aug"] },
  { name: "Canola", planting: ["Mar", "Apr", "Sep", "Oct"], harvesting: ["Jun", "Jul"] },
  { name: "Corn", planting: ["Apr", "May"], harvesting: ["Sep", "Oct"] },
  { name: "Cotton", planting: ["Apr", "May"], harvesting: ["Oct", "Nov"] },
  { name: "Oats", planting: ["Mar", "Apr", "Sep", "Oct"], harvesting: ["Jun", "Jul"] },
  { name: "Wheat", planting: ["Mar", "Apr", "Oct", "Nov"], harvesting: ["Jun", "Jul", "Aug"] },
];

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const CropTable = () => {
  return (
    <section className="table">
      <table border="1" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Crops</th>
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
                if (crop.planting.includes(month)) return <td key={index} style={{ backgroundColor: "#90EE90" }}></td>;
                if (crop.harvesting.includes(month)) return <td key={index} style={{ backgroundColor: "#FFD700" }}></td>;
                return <td key={index}></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Legend */}
      <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "15px", height: "15px", backgroundColor: "#90EE90", marginRight: "5px" }}></div>
          <span>Planting</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "15px", height: "15px", backgroundColor: "#FFD700", marginRight: "5px" }}></div>
          <span>Harvesting</span>
        </div>
      </div>
    </section>
  );
};

export default CropTable;
