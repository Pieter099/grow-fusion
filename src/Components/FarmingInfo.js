import React from "react";
import CropTable from "../Subcomponents/Table";
import SubNavbar from "../Subcomponents/SubNavbar";
import soilPrep from "../Subcomponents/soilPrep";
import cropCare from "../Subcomponents/cropCare";
import cropInfo from "../Subcomponents/cropInfo";
import "../Styles/farmingInfo.css";

const FarmInfo = () => {
  return (
    <main className="info-section">
      <h2>Farming Information</h2>
      <SubNavbar />
      <section className="cropPrices" id="crop-price">
        <h3>Prices of crops:</h3>
      </section>
      <cropInfo />
      <section className="cropSeason" id="crop-calender">
        <h3>Crop Seasons:</h3>
        <p className="intro">Here is a table that outlines the planting and harvesting seasons for various crops:</p>
        <CropTable />
      </section>
      <soilPrep />
      <cropCare />
    </main>
  );
};

export default FarmInfo;
